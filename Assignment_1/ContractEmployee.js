"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ContractEmployee = void 0;
var Employee_1 = require("./Employee");
var ContractEmployee = /** @class */ (function (_super) {
    __extends(ContractEmployee, _super);
    function ContractEmployee(firstName, lastName, age, address, rank, ssn, hours, hourlyRate) {
        var _this = _super.call(this, firstName, lastName, age, address, rank, ssn) || this;
        _this.hours = hours;
        _this.hourlyRate = hourlyRate;
        return _this;
    }
    /**
    * Display all the information of a saved employee
    * @returns a valid employee info
    */
    ContractEmployee.prototype.displayInformation = function () {
        if (this.saveEmployee() == null) {
            return "Please provide valid information.";
        }
        else {
            var name_1 = this.firstName + " " + this.lastName;
            var employee = "Name: " + name_1 + "\n" + "Age: " + this.age + "\n" + "Address: " +
                this.address + "\n" + "Rank: " + this.rank + "\n" + "SSN: " + this.ssn;
            console.log(employee);
            return employee;
        }
    };
    /**
     * Calculate Compensation for Overtime
     * @returns overtime bonus amount
     */
    ContractEmployee.prototype.calculateCompensation = function () {
        var overtime = 0;
        if (this.hours > 40 && this.hourlyRate > 0) {
            var increasedRate = this.hourlyRate * 1.5;
            overtime = this.hours - 40;
            var bonus = overtime * increasedRate;
            console.log("Total Overtime Payment is $".concat(bonus, "."));
            return bonus;
        }
        else {
            console.log('No Overtime Payment Below 40 hours.');
            return overtime;
        }
    };
    /**
     * Checking for Age, Rank and SSN validation
     * @returns true if validates all fields and false when one of the fields is invalid.
     */
    ContractEmployee.prototype.saveEmployee = function () {
        if (this.validateAge() == true && this.validateRank() == true
        //&& this.validateSSN() == true
        ) {
            return "Employee is successfully saved as a Contract Employee.";
        }
        if (this.validateAge() == false) {
            console.log('Age should be greater than or equal to 16.');
        }
        if (this.validateRank() == false) {
            console.log('Rank should be between 1 and 5.');
        }
        // if(this.validateSSN() == false){
        //     console.log('SSN should be in proper format.');
        // }
    };
    return ContractEmployee;
}(Employee_1.Employee));
exports.ContractEmployee = ContractEmployee;
