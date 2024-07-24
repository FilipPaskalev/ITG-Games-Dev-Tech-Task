"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eCrncyCode_1 = __importDefault(require("../enums/eCrncyCode"));
const user_1 = __importDefault(require("../components/user"));
const USERS = [
    new user_1.default(22.58, 56.98, eCrncyCode_1.default.EUR),
    new user_1.default(5.98, 1.56, eCrncyCode_1.default.EUR),
    new user_1.default(10.35, 5.0, eCrncyCode_1.default.EUR),
    new user_1.default(1235.69, 3.98, eCrncyCode_1.default.EUR),
    new user_1.default(598.01, 125.6, eCrncyCode_1.default.EUR)
];
exports.default = USERS;
//# sourceMappingURL=users.js.map