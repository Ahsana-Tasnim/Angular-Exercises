export abstract class Employee{
    
    public ssn: string;
    public lastName: string;
    public firstName: string;
    public address: string;
    public rank: number;
    public age: number;

    constructor(firstName:string, lastName:string, age:number, address:string, rank:number, ssn:string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
        this.rank = rank;
        this.ssn = ssn;

    }

    protected validateAge(): boolean{
        
        if(this.age < 16){
            return false;
        }
        else{
            return true;
        }
    }

    protected validateRank(): boolean{
        if(this.rank < 1 ){
            return false;
        }else if(this.rank > 5){
            return false;
        }else{
            return true;
        }
    }

    protected validateSSN(): boolean{
        const rExp : RegExp = /^\d{3}-\d{3}-\d{3}$/;
  
        if (rExp.test(this.ssn))
          {
            return true;
          }
        else
          {
            return false;
          }
    }
}