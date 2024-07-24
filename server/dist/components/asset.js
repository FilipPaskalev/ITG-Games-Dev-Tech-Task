"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const eRoots_1 = __importDefault(require("../enums/eRoots"));
class Asset {
    constructor(fileName) {
        this.key = fileName.replace('.png', '').toUpperCase();
        this.src = __1.DOMAIN + eRoots_1.default.ASSETS + '/' + fileName;
    }
    getKey() {
        return this.key;
    }
    getSrc() {
        return this.src;
    }
}
exports.default = Asset;
//# sourceMappingURL=asset.js.map