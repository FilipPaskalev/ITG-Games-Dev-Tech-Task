import IPosition from '../interfaces/iPosition'

class Position implements IPosition {
  private x: number
  private y: number

  // ?: To consider default values
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  public getX(): number {
    return this.x
  }

  public setX(x: number): void {
    this.x = x
  }

  public getY(): number {
    return this.y
  }

  public setY(y: number): void {
    this.y = y
  }
}

export default Position
