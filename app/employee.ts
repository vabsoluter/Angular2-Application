export class Employee {
    name: string;
    pos: string;
    gender: string;
    image: string;

    constructor(employeeInfo:any){
        this.name = employeeInfo.name;
        this.pos = employeeInfo.pos;
        this.gender = employeeInfo.gender;
        this.image = employeeInfo.image;
    }
}