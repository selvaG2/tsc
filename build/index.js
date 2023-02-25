"use strict";
class EmpDetails {
    constructor(id, name, des, salary, project) {
        this.id = id;
        this.name = name;
        this.des = des;
        this.salary = salary;
        this.project = project;
    }
    get details() {
        return this.id;
    }
    display() {
        console.log("The employee id is          : " + this.id);
        console.log("The employee name is        : " + this.name);
        console.log("The employee Designation is : " + this.des);
        console.log("The employee Salary is      : " + this.salary);
        console.log("The employee Project is     : " + this.project);
    }
}
var obj = new EmpDetails("emp1", "Selva", "Hr", 12000, "Sheets");
obj.display();
