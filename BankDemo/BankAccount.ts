export abstract class BankAccount{
   
    protected accountBalance:number;
    
    constructor(initialBalance:number){
        this.accountBalance = initialBalance;
    }
}