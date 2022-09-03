import { Employee } from "./Employee";
import { IEmployee } from "./IEmployee";

export class ContractEmployee extends Employee implements IEmployee{
    
    public hours:number;
    public hourlyRate:number;

    constructor(firstName:string, lastName:string, age:number, address:string, rank:number,
         ssn:string, hours:number,hourlyRate:number){
        super(firstName, lastName, age, address, rank, ssn);
        this.hours = hours;
        this.hourlyRate = hourlyRate;
    }

    /**
    * Display all the information of a saved employee
    * @returns a valid employee info
    */
    displayInformation(): string {
        if(this.saveEmployee() == null){
            return "Please provide valid information.";
        }else{
            let name = this.firstName + " " + this.lastName;
            let employee = "Name: " + name + "\n" + "Age: " + this.age + "\n" + "Address: " +
             this.address + "\n" + "Rank: " + this.rank + "\n" + "SSN: " + this.ssn;
            console.log(employee);
            return employee;
        }
    }

    /**
     * Calculate Compensation for Overtime 
     * @returns overtime bonus amount
     */
    calculateCompensation(): number {
        let overtime = 0;
        if(this.hours > 40 && this.hourlyRate > 0){
            let increasedRate = this.hourlyRate * 1.5;
            overtime = this.hours - 40;
            let bonus = overtime * increasedRate;
            console.log(`Total Overtime Payment is $${bonus}.`);
            return bonus;
        }else{
            console.log('No Overtime Payment Below 40 hours.');
            return overtime;
        }
    }

    /**
     * Checking for Age, Rank and SSN validation
     * @returns true if validates all fields and false when one of the fields is invalid.
     */
    saveEmployee() {
        if(this.validateAge() == true && this.validateRank() == true 
        //&& this.validateSSN() == true
        ){
            return `Employee is successfully saved as a Contract Employee.`;
         }
        if(this.validateAge() == false){
            console.log('Age should be greater than or equal to 16.');
        }
        if(this.validateRank() == false){
            console.log('Rank should be between 1 and 5.');
        }
        // if(this.validateSSN() == false){
        //     console.log('SSN should be in proper format.');
        // }
    }
    
}