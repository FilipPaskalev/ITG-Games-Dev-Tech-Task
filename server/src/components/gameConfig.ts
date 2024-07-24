import IGameConfig from '../interfaces/iGameConfig';

class GameConfiguration implements IGameConfig {
  private canvasWidth: number;
  private canvasHeight: number;
  private canvasID: string;
  private gridSize: number;

  constructor(canvasWidth: number, canvasHeight: number, canvasID: string, gridSize: number) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.canvasID = canvasID;
    this.gridSize = gridSize;
  }

  // private isItSquare(checkedNumber: number): number | boolean {
  //   if (checkedNumber >= 4) {
  //     let squareFrom = Math.sqrt(checkedNumber);
  //     if (squareFrom * squareFrom === checkedNumber) {
  //       return checkedNumber;
  //     } else {
  //       return false;
  //     }
  //   }
  //   return false;
  // }
}

export default GameConfiguration;
