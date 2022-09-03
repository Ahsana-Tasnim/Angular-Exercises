"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ChequingAccount = void 0;
var BankAccount_1 = require("./BankAccount");
var ChequingAccount = /** @class */ (function (_super) {
    __extends(ChequingAccount, _super);
    function ChequingAccount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.numberOfWithdrawals = 0;
        _this.TRANSFEE = 10;
        return _this;
    }
    ChequingAccount.prototype.withdrawalAmount = function (amount) {
        if (this.numberOfWithdrawals % 5 == 0 && this.numberOfWithdrawals > 0) {
            this.accountBalance -= (amount + this.TRANSFEE);
            this.numberOfWithdrawals++;
            console.log("Transaction Fee");
        }
        else if (this.accountBalance > amount) {
            this.accountBalance -= amount;
            this.numberOfWithdrawals++;
        }
        else {
            throw new Error('Insufficient Funds');
        }
    };
    ChequingAccount.prototype.depositAmount = function (amount) {
        if (amount < 0) {
            throw new Error('Invalid Fund Amount');
        }
        else {
            this.accountBalance += amount;
        }
    };
    ChequingAccount.prototype.getBalance = function () {
        return this.accountBalance;
    };
    ChequingAccount.prototype.printBalance = function () {
        return "Your Chequing Account Balance is $".concat(this.accountBalance.toFixed(2));
    };
    return ChequingAccount;
}(BankAccount_1.BankAccount));
exports.ChequingAccount = ChequingAccount;
