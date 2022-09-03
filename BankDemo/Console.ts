import { SavingsAccount } from "./SavingsAccount";
import {ChequingAccount} from "./ChequingAccount";

let ChqAcc = new ChequingAccount(100);

console.log(ChqAcc.printBalance());

let SavingAccount = new SavingsAccount(1000);

console.log(SavingAccount.printBalance());

try{
    SavingAccount.withdrawalAmount(100);
}catch(error){
    console.log(error.message);
}

console.log(SavingAccount.printBalance());

SavingAccount.depositAmount(20);
SavingAccount.depositAmount(20);
SavingAccount.depositAmount(20);
SavingAccount.depositAmount(20);
SavingAccount.depositAmount(20); // 5th deposit

console.log(SavingAccount.printBalance());