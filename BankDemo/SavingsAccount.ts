import {BankAccount } from "./BankAccount";
import {IBankAccount} from "./IBankAccount";

export class SavingsAccount extends BankAccount implements IBankAccount{
    
    private numberOfDeposits:number = 0;
    private readonly INTEREST: number = 0.05;

    /**
     * Withdraw money from account, cannot be overdrwan
     * @param amount the amount to be withdrawn
     */
    withdrawalAmount(amount: number): void {
        if(amount > this.accountBalance){
            throw new Error('Insufficient Funds');
        }else{
            this.accountBalance -= amount;
        }
    }
    depositAmount(amount: number): void {
        this.numberOfDeposits++;

        if(this.numberOfDeposits % 5 == 0 && this.numberOfDeposits > 0){
            let temp = this.accountBalance + amount;
            this.accountBalance = (temp + (temp * this.INTEREST));
            console.log('interest');
        }else{
            this.accountBalance += amount;
        }
    }
    getBalance(): number {
        return this.accountBalance;
    }
    printBalance(): string {
        return `Your Saving Account Balance is $${this.accountBalance.toFixed(2)}`;
    }

} 