"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, age, address, rank, ssn) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
        this.rank = rank;
        this.ssn = ssn;
    }
    Employee.prototype.validateAge = function () {
        if (this.age < 16) {
            return false;
        }
        else {
            return true;
        }
    };
    Employee.prototype.validateRank = function () {
        if (this.rank < 1) {
            return false;
        }
        else if (this.rank > 5) {
            return false;
        }
        else {
            return true;
        }
    };
    Employee.prototype.validateSSN = function () {
        var rExp = /^\d{3}-\d{3}-\d{3}$/;
        if (rExp.test(this.ssn)) {
            return true;
        }
        else {
            return false;
        }
    };
    return Employee;
}());
exports.Employee = Employee;
