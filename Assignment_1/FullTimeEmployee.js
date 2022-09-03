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
exports.FullTimeEmployee = void 0;
var Employee_1 = require("./Employee");
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee(firstName, lastName, age, address, rank, ssn, salary, overtimeHours) {
        var _this = _super.call(this, firstName, lastName, age, address, rank, ssn) || this;
        _this.salary = salary;
        _this.overtimeHours = overtimeHours;
        return _this;
    }
    /**
     * Display all the information of a saved employee
     * @returns a valid employee info
     */
    FullTimeEmployee.prototype.displayInformation = function () {
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
    FullTimeEmployee.prototype.calculateCompensation = function () {
        if (this.overtimeHours >= 1 && this.overtimeHours <= 10) {
            this.bonus = this.salary * 1.25 * this.overtimeHours;
            console.log("Total Bonus Amount is $".concat(this.bonus));
            return this.bonus;
        }
        else if (this.overtimeHours >= 11 && this.overtimeHours <= 20) {
            this.bonus = this.salary * 1.5 * this.overtimeHours;
            console.log("Total Bonus Amount is $".concat(this.bonus));
            return this.bonus;
        }
        else if (this.overtimeHours >= 21 && this.overtimeHours <= 30) {
            this.bonus = this.salary * 1.75 * this.overtimeHours;
            console.log("Total Bonus Amount is $".concat(this.bonus));
            return this.bonus;
        }
        else if (this.overtimeHours > 30) {
            this.bonus = this.salary * 2 * this.overtimeHours;
            console.log("Total Bonus Amount is $".concat(this.bonus));
            return this.bonus;
        }
        else {
            console.log('No Overtime Payment Below 40 hours.');
            this.bonus = 0;
            return this.bonus;
        }
    };
    /**
     * Checking for Age, Rank and SSN validation
     * @returns true if validates all fields and false when one of the fields is invalid.
     */
    FullTimeEmployee.prototype.saveEmployee = function () {
        if (this.validateAge() == true && this.validateRank() == true
        //&& this.validateSSN() == true
        ) {
            return "Employee is successfully saved as a Full Time Employee.";
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
    /**
     * Calculate total Salary with bonus
     * @returns total Salary including overtime bonus
     */
    FullTimeEmployee.prototype.calculateSalary = function () {
        var totalSalary = this.salary + this.bonus;
        console.log("Total Salary is $".concat(totalSalary));
        return totalSalary;
    };
    return FullTimeEmployee;
}(Employee_1.Employee));
exports.FullTimeEmployee = FullTimeEmployee;
