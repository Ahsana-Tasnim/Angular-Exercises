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
exports.SavingsAccount = void 0;
var BankAccount_1 = require("./BankAccount");
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.numberOfDeposits = 0;
        _this.INTEREST = 0.05;
        return _this;
    }
    /**
     * Withdraw money from account, cannot be overdrwan
     * @param amount the amount to be withdrawn
     */
    SavingsAccount.prototype.withdrawalAmount = function (amount) {
        if (amount > this.accountBalance) {
            throw new Error('Insufficient Funds');
        }
        else {
            this.accountBalance -= amount;
        }
    };
    SavingsAccount.prototype.depositAmount = function (amount) {
        this.numberOfDeposits++;
        if (this.numberOfDeposits % 5 == 0 && this.numberOfDeposits > 0) {
            var temp = this.accountBalance + amount;
            this.accountBalance = (temp + (temp * this.INTEREST));
            console.log('interest');
        }
        else {
            this.accountBalance += amount;
        }
    };
    SavingsAccount.prototype.getBalance = function () {
        return this.accountBalance;
    };
    SavingsAccount.prototype.printBalance = function () {
        return "Your Saving Account Balance is $".concat(this.accountBalance.toFixed(2));
    };
    return SavingsAccount;
}(BankAccount_1.BankAccount));
exports.SavingsAccount = SavingsAccount;
