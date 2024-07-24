import Position from "./position.js";
class Asset {
  constructor(src, x, y) {
    this.image = new Image();
    this.image.src = src;
    this.position = new Position(0, 0);
    x && x ? this.position.setX(x) : null;
    y && y ? this.position.setY(y) : null;
  }
}
export default Asset;
