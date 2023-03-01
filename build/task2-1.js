"use strict";
class Course {
    constructor(course_id, course_name) {
        this.course_id = course_id;
        this.course_name = course_name;
    }
    course_details() {
        console.log(`The course id is ${this.course_id} and course name is ${this.course_name}.`);
    }
}
class Employee extends Course {
    constructor(course_id, course_name, emp_id, emp_name, emp_des) {
        super(course_id, course_name);
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_des = emp_des;
    }
    employee_details() {
        super.course_details();
        console.log(`The employee id is ${this.emp_id},name of the employee is ${this.emp_name} and his designation is ${this.emp_des}`);
    }
}
class Admin extends Employee {
    constructor(course_id, course_name, emp_id, emp_name, emp_des, admin_id, admin_name) {
        super(course_id, course_name, emp_id, emp_name, emp_des);
        this.admin_id = admin_id;
        this.admin_name = admin_name;
    }
    admindetail() {
        super.employee_details();
        console.log(`The admin id is ${this.admin_id} and name of the admin is ${this.admin_name}`);
    }
}
let e = new Admin(1, "TYPESCRIPT", 21, "Selva", "Full-stack-dev", 1, "Ganapathi");
e.admindetail();
