import { BankAccount } from "./bank-account";
import { IBankAccount } from "./ibank-account";
import { Transaction } from "./transaction";
import { TransactionType } from "./transaction-type.enum";

/**
 * Creates Chequing Account
 */
export class ChequingAccount extends BankAccount implements IBankAccount{
    
    private numberOfWithdarawals:number = 0;
    private readonly TRANSFEE:number = 10;
    
    /**
     * sets initial balance
     * @param initialBalance
     */
    constructor(initialBalance: number){
        super(initialBalance);
    }

    /**
     * Withdawing from Chequing Account
     * @param amount is withdrawn from Chequing Account
     * return total account balance after withdrawal
     */
    withdrawalAmount(amount: number): void {
        this.numberOfWithdarawals++;

        if(this.numberOfWithdarawals %5 == 0){
            if((amount + this.TRANSFEE) > this.accountBalance){
                this.numberOfWithdarawals--;
                throw new Error("Insufficient Funds.");
            }else{
                //WIthdrawal transaction
                let withdrawal: Transaction = new Transaction();
                withdrawal.amount = amount;
                withdrawal.transtype = TransactionType.Withdrawal;
     
                //Fee transaction
                let fee: Transaction = new Transaction();
                fee.amount = amount;
                fee.transtype = TransactionType.Fee;
     
                //Push both transactions at once
                this.transactions.push(withdrawal, fee);
                this.accountBalance -= amount + this.TRANSFEE;
             }
        }else{
            if(amount > this.accountBalance){
                this.numberOfWithdarawals--;
                throw new Error("Insufficient funds.");
            }else{
                //Withdrawal transaction
                let withdrawal: Transaction = new Transaction();
                withdrawal.amount = amount;
                withdrawal.transtype = TransactionType.Withdrawal;
                this.transactions.push(withdrawal);

                this.accountBalance -= amount;
            }
        }
    }

    /**
     * Deposit to Chequing Account
     * @param amount is deposited to Chequing account
     * returns total account balance after deposit
     */
    depositAmount(amount: number): void {
       //Deposit transaction
       let deposit: Transaction = new Transaction();
       deposit.amount = amount;
       deposit.transtype = TransactionType.Deposit;
       this.transactions.push(deposit);

       this.accountBalance += amount;
    }

    /**
     * Gets account Balance as number
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
        return `Your chequing account balance is ${this.getBalance().toLocaleString('en-US', {style: 'currency', currency: 'USD'})}`;
    }
}
