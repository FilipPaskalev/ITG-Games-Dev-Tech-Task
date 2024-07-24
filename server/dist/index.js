"use strict";
// TODO (when finish with implementation of front-end)
// !: implement API KEY
// !: add Jest tests
// !: remove http://localhost:3000/users after tests
// !: Make root dir like old file server style (add html with access folders instead just print)
// !: remove Dev note for activation
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DOMAIN = exports.PORT = exports.HOST = exports.PROTOCOL = exports.SERVER = void 0;
// TODO create GET IMAGE BY ID
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
// * * COMPONENTS
const multipliers_1 = __importDefault(require("./components/multipliers"));
const asset_1 = __importDefault(require("./components/asset"));
// * * ENUMS
const eRootParams_1 = __importDefault(require("./enums/eRootParams"));
const eRoots_1 = __importDefault(require("./enums/eRoots"));
// * * MOCK DB
const users_1 = __importDefault(require("./dbMock/users"));
const multipliers_2 = __importDefault(require("./dbMock/multipliers"));
const gameConfig_1 = __importDefault(require("./dbMock/gameConfig"));
exports.SERVER = (0, express_1.default)();
exports.PROTOCOL = 'http';
exports.HOST = 'localhost';
exports.PORT = 3000;
exports.DOMAIN = exports.PROTOCOL + '://' + exports.HOST + ':' + exports.PORT;
let assets = new Array();
fs_1.default.readdir(__dirname + eRoots_1.default.ASSETS, (err, files) => {
    files.forEach((file) => {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        assets.push(new asset_1.default(file.toString()));
    });
});
// * * Access to images => static / public
exports.SERVER.use(eRoots_1.default.ASSETS, express_1.default.static(__dirname + eRoots_1.default.ASSETS));
exports.SERVER.use(express_1.default.static('public'));
// * * ROOT
// localhost:3000/
exports.SERVER.get('/', (req, res, next) => {
    let availableDirectories = 'Available directories: \n '
        .concat(exports.DOMAIN + eRoots_1.default.ASSETS + '\n')
        .concat(exports.DOMAIN + eRoots_1.default.CONFIG + '\n')
        .concat(exports.DOMAIN + eRoots_1.default.MULTIPLIERS + '\n')
        .concat(exports.DOMAIN + eRoots_1.default.USER + '/:' + eRootParams_1.default.USER_ID + '\n');
    res.send(availableDirectories);
});
// TODO SEARCH ASSET BY KEY(ID)
// * * CONFIGURATIONS
// http://localhost:3000/configuration
exports.SERVER.get(eRoots_1.default.CONFIG, (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    // res.send(JSON.stringify({ key: 'value' }))
    res.send(JSON.stringify(gameConfig_1.default));
});
// * * MULTIPLIERS
// localhost:3000/multipliers
exports.SERVER.get(eRoots_1.default.MULTIPLIERS, (req, res, next) => {
    res.send(multipliers_1.default.get().options(3, multipliers_2.default));
});
// * * USER BY ID
// localhost:3000/user/:userID
exports.SERVER.get(eRoots_1.default.USER + eRootParams_1.default.USER_ID, (req, res) => {
    res.send(users_1.default[parseInt(req.params.userID)]);
});
// * * USERS
// localhost:3000/users
http: exports.SERVER.get(eRoots_1.default.USERS, (req, res, next) => {
    res.send(users_1.default);
});
// * * ASSETS
// localhost:3000/assets
http: exports.SERVER.get(eRoots_1.default.ASSETS, (req, res, next) => {
    res.send(assets);
});
// * * accesses
// localhost:3000/users
http: exports.SERVER.get('/accesses', (req, res, next) => {
    res.send(Object.values(eRoots_1.default));
});
// * * Dev note for activation
exports.SERVER.listen(exports.PORT, () => {
    console.log(`Running server on PORT ${exports.PORT}...`);
    console.log('Access on ' + exports.DOMAIN);
});
//# sourceMappingURL=index.js.map