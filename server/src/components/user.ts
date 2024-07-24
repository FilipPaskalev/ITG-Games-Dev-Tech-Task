import EnumCrncyCode from '../enums/eCrncyCode'
import IUser from '../interfaces/iUser'

class User implements IUser {
  private amount: number
  private bet: number
  private currencyCode: EnumCrncyCode

  constructor(amount: number, bet: number, currencyCode: EnumCrncyCode) {
    this.amount = amount
    this.bet = bet
    this.currencyCode = currencyCode
  }

  public getAmount(): number {
    return this.amount
  }

  public setAmount(value: number) {
    this.amount = value
  }

  public getBet(): number {
    return this.bet
  }

  public setBet(value: number) {
    this.bet = value
  }

  public getCurrencyCode(): EnumCrncyCode {
    return this.currencyCode
  }

  public setCurrencyCode(value: EnumCrncyCode) {
    this.currencyCode = value
  }
}

export default User
