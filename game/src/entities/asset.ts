import Position from './position'

interface IAsset {}

class Asset implements IAsset {
  private image: HTMLImageElement = new Image()
  private position: Position

  // ?: To analyze is default value is needed
  constructor(src: string, x: number = 0, y: number = 0) {
    this.image.src = src
    this.position = new Position(x, y)
  }

  public getPosition(): Position {
    return this.position
  }

  public getImage(): HTMLImageElement {
    return this.image
  }
}

export default Asset
