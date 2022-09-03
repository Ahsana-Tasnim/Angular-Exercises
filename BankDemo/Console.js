"use strict";
exports.__esModule = true;
var SavingsAccount_1 = require("./SavingsAccount");
var ChequingAccount_1 = require("./ChequingAccount");
var ChqAcc = new ChequingAccount_1.ChequingAccount(100);
console.log(ChqAcc.printBalance());
var SavingAccount = new SavingsAccount_1.SavingsAccount(1000);
console.log(SavingAccount.printBalance());
try {
    SavingAccount.withdrawalAmount(100);
}
catch (error) {
    console.log(error.message);
}
console.log(SavingAccount.printBalance());
SavingAccount.depositAmount(20);
SavingAccount.depositAmount(20);
SavingAccount.depositAmount(20);
SavingAccount.depositAmount(20);
SavingAccount.depositAmount(20); // 5th deposit
console.log(SavingAccount.printBalance());
