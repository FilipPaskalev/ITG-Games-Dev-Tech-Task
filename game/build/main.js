import {CONST} from "./constants.js";
import Player from "./entities/player.js";
class Game {
  constructor() {
    this.backgroundImage = new Image();
    this.player = new Player(10);
    this.canvas = document.getElementById("canvas");
    this.context = this.canvas.getContext("2d");
    this.backgroundImage.src = CONST.DOMAIN + "assets/background_safe_minigame.png";
    this.backgroundImage.onload = this.render.bind(this);
  }
  render() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.drawImage(this.backgroundImage, 0, 0);
    window.requestAnimationFrame(this.render.bind(this));
  }
}
export default Game;
