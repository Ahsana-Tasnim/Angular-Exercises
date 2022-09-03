import { ContractEmployee } from "./ContractEmployee";
import {FullTimeEmployee} from "./FullTimeEmployee";

// Valid Employee
let contractEmp = new ContractEmployee("Ahsana", "Tasnim", 20, "136 Larochelle", 5, "019-90-5680", 45, 30);
contractEmp.saveEmployee();
contractEmp.displayInformation();

console.log(`~~~~~~~~~~~~~~~~~~~`);
console.log(`~~~~~~~~~~~~~~~~~~~`);

//Invalid Employee
let InvalidContractEmp = new ContractEmployee("Ahsana", "Tasnim", 10, "136 Larochelle", 5, "019-90-5680", 45, 30);
InvalidContractEmp.displayInformation();

console.log(`~~~~~~~~~~~~~~~~~~~`);
console.log(`~~~~~~~~~~~~~~~~~~~`);


 // Valid Employee
let fulltimeEmp = new FullTimeEmployee("Ahsana", "Tasnim", 20, "136 Larochelle", 5, "019-90-5680", 30, 5);
 fulltimeEmp.saveEmployee();
 fulltimeEmp.displayInformation();

 console.log(`~~~~~~~~~~~~~~~~~~~`);
 console.log(`~~~~~~~~~~~~~~~~~~~`);


 //Invalid Employee
 let InvalidfulltimeEmp = new FullTimeEmployee("Ahsana", "Tasnim", 20, "136 Larochelle", 15, "019-90-5680", 30, 5);
 InvalidfulltimeEmp.displayInformation();
