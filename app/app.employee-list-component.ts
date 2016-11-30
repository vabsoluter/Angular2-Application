
import {Component, Input, EventEmitter, Output} from '@angular/core';
import {Employee} from './employee';

@Component({
    selector: 'employee-list',
    templateUrl: './app/app.employee-list-component.html',
    styleUrls: ["./app/app.employee-list-component.css"],
})


export class EmployeeListComponent {
    @Input() employees: Employee[];
    @Output() edit = new EventEmitter();
    @Output() remove = new EventEmitter();
    images: string[] = [
        "/images/avatar2/large/matthew.png",
        "/images/avatar2/large/molly.png" 
    ];

    constructor() {}

    getImageUrl(employee: Employee) {
        const image = employee.gender === "Мужской" ?
            this.images[0] :
            this.images[1];
        return `http://semantic-ui.com/${image}`;
    }

    editEmployee(employee: Employee) {
        this.edit.emit(employee);
    }

    removeEmployee(employee: Employee) {
        this.remove.emit(employee);
    }

}
