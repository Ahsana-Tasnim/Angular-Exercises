import { Component, OnInit } from '@angular/core';
import { ChequingAccount } from './chequing-account';
import { IBankAccount } from './ibank-account';
import { SavingsAccount } from './savings-account';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})

export class AtmComponent implements OnInit {
  
  public title: string = "Angular Insta-Teller";
  public selectedAccount: IBankAccount;
  public savingsAccount: SavingsAccount = new SavingsAccount(0);
  public chequingAccount: ChequingAccount = new ChequingAccount(0);
  public amount: number;
  public error: string;
  
  constructor() { }

  ngOnInit(): void {
  }

  accountSelected(account:IBankAccount){
    this.selectedAccount = account;
  }

  /**
   * 
   * @param wAmount Withdrwal amount
   */
  withdraw(){
   this.error = "";

   //Check if a radio button is selected
   if(this.selectedAccount == null){
    this.error = "No account selected";
   }else if(isNaN(Number(this.amount)) || this.amount <= 0){
    this.error = "Invalid Withdrawal";
   }else{
    //Try catch for NSF erros thrown form the account
    try{
      this.selectedAccount.withdrawalAmount(Number(this.amount));
    }catch(e){
      this.error = e.message;
    }
   }
  }

  /**
   * Deposit into the selected account
   */
  deposit(){
    this.error = "";

    //Check if a radio button is selected
    if(this.selectedAccount == null){
      this.error ="Invalid Deposit";
    }else{
      //Try catch to NSF errors thrown from accounts
      try{
        this.selectedAccount.depositAmount(Number(this.amount));
      }catch(e){
        this.error = e.message;
      }
    }
  }

}
