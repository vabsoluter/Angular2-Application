import {Component} from '@angular/core';
import {Employee} from './employee';
import {EditEmployeeComponent} from './app.edit-employee-component';
import {EmployeeListComponent} from './app.employee-list-component';


@Component({
    selector: 'employee-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    directives: [EditEmployeeComponent, EmployeeListComponent],
    
})
export class AppComponent {
    title: string;
    employee: Employee = new Employee({});
    isNewEmployee = true;
    employees: Employee[] = [
        new Employee({name: "Константин Спиридонов", pos: "Начальник", gender: "Мужской"}),
        new Employee({name: "Владислав Басимов", pos: "Программист", gender: "Мужской"}),
        new Employee({name: "Абстрактная девушка", pos: "Не пришей кообыле хвост", gender: "Женский"})
    ];
    developerSrc: string = "http://semantic-ui.com//images/avatar2/large/matthew.png"
    constructor() {
        this.title = 'Интересные Сотрудники';
    }
    editEmployee(emp: Employee) {
        this.employee = emp;
        this.isNewEmployee = false;
    }
    removeEmployee(emp: Employee) {
        const index = this.employees.indexOf(emp);
        if (index > -1) {
            this.employees.splice(index, 1);
            this.isNewEmployee = true;
            emp.pos = emp.gender = emp.image = emp.name = undefined;
            
        }
    }
    addNewEmployee() {
        const employee = new Employee({});
        this.employee = employee;
        this.isNewEmployee = true;
    }
    saveEmployee(emp: Employee) {
        this.employees.push(emp);
        this.addNewEmployee();
        alert("Cодрудник добавлен");
    }
}