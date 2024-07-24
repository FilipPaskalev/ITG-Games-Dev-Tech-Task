import GameConfiguration from '../components/gameConfig';

const CANVAS_WIDTH: number = 950;
const CANVAS_HEIGHT: number = 650;
const CANVAS_ID: string = 'canvas';
const GRID_SIZE: number = 9;

const GAME_CONFIGURATION: GameConfiguration = new GameConfiguration(CANVAS_WIDTH, CANVAS_HEIGHT, CANVAS_ID, GRID_SIZE);

export default GAME_CONFIGURATION;
