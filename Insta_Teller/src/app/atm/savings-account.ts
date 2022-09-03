import { BankAccount } from "./bank-account";
import { IBankAccount } from "./ibank-account";
import { Transaction } from "./transaction";
import { TransactionType } from "./transaction-type.enum";

/**
 * A savings account
 */
export class SavingsAccount extends BankAccount implements IBankAccount{
    
    private numberOfDeposits: number = 0;
    private readonly INTEREST: number = 0.05;
    
    /**
     * sets an initial balace
     * @param initialBalance
     */
    constructor(initialBalance: number){
        super(initialBalance);
    }

    /**
     * Withdawing from Saving Account
     * @param amount is withdrawn from Saving Account
     * return total account balance after withdrawal
     */
    withdrawalAmount(amount: number): void {
        if(amount > this.accountBalance){
            throw new Error("Insufficient Funds.");
        }else{
            let withdrawal: Transaction = new Transaction();
            withdrawal.amount = amount;
            withdrawal.transtype = TransactionType.Withdrawal;

            this.accountBalance -= amount;
        }
    }

    /**
     * Deposit to Savings Account, claculates interest every 5th deposit
     * @param amount is deposited to Savings account
     * returns total account balance after deposit
     */
    depositAmount(amount: number): void {
        this.numberOfDeposits++;
        
        //The deposit transaction
        let deposit: Transaction = new Transaction();
        deposit.amount = amount;
        deposit.transtype = TransactionType.Deposit;
        this.transactions.push(deposit);

        if(this.numberOfDeposits % 5 == 0){
            let tempBalance: number = this.accountBalance + amount;

            //This interest transaction
            let interest: Transaction = new Transaction();
            interest.amount = (tempBalance * this.INTEREST);
            interest.transtype = TransactionType.Interest;

            this.transactions.push(interest);

            this.accountBalance = (tempBalance + (tempBalance * this.INTEREST));
        }else{
            this.accountBalance += amount;
        }
    }

    /**
     * Gets account balace as number
     * @returns account balance
     */
    getBalance(): number {
        return this.accountBalance;
    }

    /**
     * Shows account balance
     * @returns account balance
     */
    printBalance(): string {
        return `Your saving account balance is ${this.getBalance().toLocaleString('en-US',{style: 'currency', currency: 'USD'})}`;
    }
}
