"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gameConfig_1 = __importDefault(require("../components/gameConfig"));
const CANVAS_WIDTH = 950;
const CANVAS_HEIGHT = 650;
const CANVAS_ID = 'canvas';
const GRID_SIZE = 9;
const GAME_CONFIGURATION = new gameConfig_1.default(CANVAS_WIDTH, CANVAS_HEIGHT, CANVAS_ID, GRID_SIZE);
exports.default = GAME_CONFIGURATION;
//# sourceMappingURL=gameConfig.js.map