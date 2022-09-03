import { Employee } from "./Employee";
import { IEmployee } from "./IEmployee";

export class FullTimeEmployee extends Employee implements IEmployee{

    public salary:number;
    public bonus:number;
    public overtimeHours:number;

    constructor(firstName:string, lastName:string, age:number, address:string, rank:number,
        ssn:string, salary:number, overtimeHours:number){
       super(firstName, lastName, age, address, rank, ssn);
       this.salary = salary;
       this.overtimeHours = overtimeHours;
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
        if(this.overtimeHours >= 1 && this.overtimeHours <= 10 ){
           this.bonus = this.salary * 1.25 * this.overtimeHours;
           console.log(`Total Bonus Amount is $${this.bonus}`);
           return this.bonus;
        }else if(this.overtimeHours >= 11 && this.overtimeHours <= 20)
        {
            this.bonus = this.salary * 1.5 * this.overtimeHours;
            console.log(`Total Bonus Amount is $${this.bonus}`);
           return this.bonus;
        }
        else if(this.overtimeHours >= 21 && this.overtimeHours <= 30)
        {
            this.bonus = this.salary * 1.75 * this.overtimeHours;
            console.log(`Total Bonus Amount is $${this.bonus}`);
           return this.bonus;
        }
        else if(this.overtimeHours > 30)
        {
            this.bonus = this.salary * 2 * this.overtimeHours;
            console.log(`Total Bonus Amount is $${this.bonus}`);
           return this.bonus;
        }
        else{
            console.log('No Overtime Payment Below 40 hours.');
            this.bonus = 0;
            return this.bonus;
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
            return `Employee is successfully saved as a Full Time Employee.`;
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

    /**
     * Calculate total Salary with bonus
     * @returns total Salary including overtime bonus
     */
    private calculateSalary(): number{
        let totalSalary = this.salary + this.bonus;
        console.log(`Total Salary is $${totalSalary}`);
        return totalSalary;
    }

}