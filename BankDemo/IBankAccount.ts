export interface IBankAccount{

    withdrawalAmount(amount:number): void;
    depositAmount(amount:number): void;
    getBalance(): number;
    printBalance(): string;
}