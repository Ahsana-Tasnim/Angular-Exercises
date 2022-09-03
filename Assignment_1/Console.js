"use strict";
exports.__esModule = true;
var ContractEmployee_1 = require("./ContractEmployee");
var FullTimeEmployee_1 = require("./FullTimeEmployee");
// Valid Employee
var contractEmp = new ContractEmployee_1.ContractEmployee("Ahsana", "Tasnim", 20, "136 Larochelle", 5, "019-90-5680", 45, 30);
contractEmp.saveEmployee();
contractEmp.displayInformation();
console.log("~~~~~~~~~~~~~~~~~~~");
console.log("~~~~~~~~~~~~~~~~~~~");
//Invalid Employee
var InvalidContractEmp = new ContractEmployee_1.ContractEmployee("Ahsana", "Tasnim", 10, "136 Larochelle", 5, "019-90-5680", 45, 30);
InvalidContractEmp.displayInformation();
console.log("~~~~~~~~~~~~~~~~~~~");
console.log("~~~~~~~~~~~~~~~~~~~");
// Valid Employee
var fulltimeEmp = new FullTimeEmployee_1.FullTimeEmployee("Ahsana", "Tasnim", 20, "136 Larochelle", 5, "019-90-5680", 30, 5);
fulltimeEmp.saveEmployee();
fulltimeEmp.displayInformation();
console.log("~~~~~~~~~~~~~~~~~~~");
console.log("~~~~~~~~~~~~~~~~~~~");
//Invalid Employee
var InvalidfulltimeEmp = new FullTimeEmployee_1.FullTimeEmployee("Ahsana", "Tasnim", 20, "136 Larochelle", 15, "019-90-5680", 30, 5);
InvalidfulltimeEmp.displayInformation();
