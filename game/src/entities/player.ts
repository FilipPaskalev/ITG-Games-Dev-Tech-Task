import IPlayer from '../interfaces/iPlayer'

class Player implements IPlayer {
  private amount: number
  private bet: number
  private currencyCode: string

  constructor(amount: number, bet: number, currencyCode: string) {
    this.amount = amount
    this.bet = bet
    this.currencyCode = currencyCode
  }

  public getAmount(): number {
    return this.amount
  }

  public setAmount(amount: number): void {
    this.amount = amount
  }

  public getCurrencyCode(): string {
    return this.currencyCode
  }
}

export default Player
