class Game {
  private canvas: HTMLCanvasElement
  private context: CanvasRenderingContext2D

  private backgroundImage: HTMLImageElement = new Image()

  constructor() {
    this.canvas = document.getElementById('canvas') as HTMLCanvasElement
    this.context = this.canvas.getContext('2d')!

    // this.backgroundImage.src = CONST.DOMAIN + 'assets/background_safe_minigame.png'
    this.backgroundImage.onload = this.render.bind(this)
  }

  // Main Game Loop
  public render(): void {
    // Clear the canvas
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)

    // Draw the background image
    this.context.drawImage(this.backgroundImage, 0, 0)

    window.requestAnimationFrame(this.render.bind(this))
  }
}

export default Game
