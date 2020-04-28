import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';
//import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-empleyees',
  templateUrl: './empleyees.component.html',
  styleUrls: ['./empleyees.component.css']
})
export class EmpleyeesComponent implements OnInit {

  list : Employee[];
  count = 1 ;
  //update : boolean = false;

  constructor(public service : EmployeeService) { }

  ngOnInit() {
    this.service.getEmployees().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        this.count+=1;
        return { 
          id : item.payload.doc.id,    //here get id
          ...item.payload.doc.data()   //here get others data
        } as Employee;
      })
      //console.log(this.count);
    });
  }

  getCount(){
    return this.count;
  }

}
