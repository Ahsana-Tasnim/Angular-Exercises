import {TransactionType} from "./transaction-type.enum";

/**
 * holds a single transaction with an amount and a transaction type
 */
export class Transaction {
    public amount: number;
    public transtype: TransactionType;

    /**
     * prints itself
     */
    public toString(): string{
        return TransactionType[this.transtype] + " " + this.amount.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }
    
}

