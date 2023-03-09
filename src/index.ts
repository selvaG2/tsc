class EmpDetails {
    id?: string | number;
    name: string;
    des: string;
    salary: number;
    project: string;
    constructor(id: string, name: string, des: string, salary: number, project: string) {
        this.id = id;
        this.name = name;
        this.des = des;
        this.salary = salary;
        this.project = project;
    }
    display(): void {

        console.log(`The employee id is          : ${this.id}`);
        console.log(`The employee name is        : ${this.name}`);
        console.log(`The employee Designation is : ${this.des}`);
        console.log(`The employee Salary is      : ${this.salary}`);
        console.log(`The employee Project is     : ${this.project}`);

    }
}
var obj = new EmpDetails("emp1", "Selva", "Hr", 12000, "Sheets");
obj.display();
    