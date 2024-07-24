"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(amount, bet, currencyCode) {
        this.amount = amount;
        this.bet = bet;
        this.currencyCode = currencyCode;
    }
    getAmount() {
        return this.amount;
    }
    setAmount(value) {
        this.amount = value;
    }
    getBet() {
        return this.bet;
    }
    setBet(value) {
        this.bet = value;
    }
    getCurrencyCode() {
        return this.currencyCode;
    }
    setCurrencyCode(value) {
        this.currencyCode = value;
    }
}
exports.default = User;
//# sourceMappingURL=user.js.map