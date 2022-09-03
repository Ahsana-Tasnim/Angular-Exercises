import {BankAccount } from "./BankAccount";
import {IBankAccount} from "./IBankAccount";

export class ChequingAccount extends BankAccount implements IBankAccount{
    
    private numberOfWithdrawals:number = 0;
    private readonly TRANSFEE:number = 10;
    
    withdrawalAmount(amount: number): void {
        if(this.numberOfWithdrawals % 5 == 0 && this.numberOfWithdrawals > 0){
            this.accountBalance -= (amount + this.TRANSFEE);
            this.numberOfWithdrawals++;
            console.log(`Transaction Fee`);
        }else if(this.accountBalance > amount){
            this.accountBalance -= amount;
            this.numberOfWithdrawals++;
        }else{
            throw new Error('Insufficient Funds');
        }


    }
    depositAmount(amount: number): void {
        if(amount < 0){
            throw new Error('Invalid Fund Amount');
        }else{
            this.accountBalance += amount;
        }
    }
    getBalance(): number {
        return this.accountBalance;
    }
    printBalance(): string {
        return `Your Chequing Account Balance is $${this.accountBalance.toFixed(2)}`;
    }
    
}