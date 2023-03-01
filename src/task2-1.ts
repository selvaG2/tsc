class Course{
    course_id: number;
    course_name: string;

    constructor(course_id: number, course_name: string) {
        this.course_id = course_id;
        this.course_name = course_name;
    }

    public course_details(): any{
        console.log(`The course id is ${this.course_id} and course name is ${this.course_name}.`);
    }
}

class Employee extends Course{
    emp_id: number;
    emp_name: string;
    emp_des: string;

    constructor(course_id: number, course_name: string, emp_id: number, emp_name: string, emp_des: string ) {
        super(course_id, course_name);
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_des = emp_des;
    }

    public employee_details(): any{
        super.course_details();
        console.log(`The employee id is ${this.emp_id},name of the employee is ${this.emp_name} and his designation is ${this.emp_des}`)
    }
}

class Admin extends Employee{
    admin_id: number;
    admin_name: string;

    constructor(course_id: number, course_name: string, emp_id: number, emp_name: string, emp_des: string, admin_id: number, admin_name: string) {
        super(course_id, course_name, emp_id, emp_name, emp_des);
        this.admin_id = admin_id;
        this.admin_name = admin_name;
    }

    public admindetail() {
        super.employee_details();
        console.log(`The admin id is ${this.admin_id} and name of the admin is ${this.admin_name}`);
    }
}

let e = new Admin(1, "TYPESCRIPT", 21, "Selva", "Full-stack-dev", 1, "Ganapathi");
e.admindetail();
