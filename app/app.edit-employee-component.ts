import {Component, Input, EventEmitter, Output} from '@angular/core';
import {Employee} from './employee';


@Component({
    selector: 'edit-employee-form',
    templateUrl: './app/app.edit-employee-component.html',
    styleUrls: ['./app/app.edit-employee-component.css']
})


export class EditEmployeeComponent {
    @Input() employee: Employee;
    @Input() isNewEmployee = true;
    @Output() saveEployee = new EventEmitter();
    genders: string[] = ["Мужской", "Женский"];
    editHeader: string = "Карточка сотрудника";
    pos: string = "Должность";
    name: string = "ФИО";
    gender: string = "Пол";

    constructor() {}

    isNew() {
        return this.isNewEmployee;
        
    }

    addEmployee() {
        console.log("name:", this.employee.name)
        if(this.employee.name!=undefined && this.employee.gender!= undefined){
            this.saveEployee.emit(this.employee);
        }
    }

}