/**
 * bak account interface
 */
export interface IBankAccount {
    withdrawalAmount(amount:number);
    depositAmount(amount:number);
    getBalance(): number;
    printBalance(): string;
}
