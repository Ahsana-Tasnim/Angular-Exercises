import { Transaction } from "./transaction";

export class BankAccount {
    public accountBalance:number;
    public transactions: Transaction[] = [];

    /**
     * sets an initial balance
     * @param initialBalance 
     */
    public constructor(initialBalance: number){
        this.accountBalance = initialBalance;
    }
}
