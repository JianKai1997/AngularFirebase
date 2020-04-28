import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/employee.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

import { Employee } from 'src/app/shared/employee.model';
import { EmpleyeesComponent } from 'src/app/empleyees/empleyees.component'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  list : Employee[];
  count : number;

  constructor(public service : EmployeeService,
    private firestore : AngularFirestore,
    private toastr : ToastrService,
    private testing : EmpleyeesComponent) {}

  counting() { 
    this.service.getEmployees().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        this.count+=1;
        return { 
          ...item.payload.doc.data()   //here get others data
        } as Employee;
      })
    });
  }

  ngOnInit() {
    this.resetForm();
    this.counting();
  }

  //initialize formdata
  resetForm(form?: NgForm) {
    this.count = 1;
    if (form != null)
      form.resetForm();
    this.service.formData = {
      id: null,
      fullName: '',
      position: '',
      empCode: '',
      mobile: '',
      gender: '',
      department: ''
    }
  }

  onSubmit(form:NgForm){
    let data = Object.assign({},form.value); //achieve value from input //object.assign is to make a copy of input so that wont affect the ori
    delete data.id;
    data.empCode = this.count;
    if(form.value.id == null){
      this.firestore.collection('employees').add(data);  //go to firebase add data under 'employees'
    }
    else{
      this.firestore.doc('employees/' +form.value.id).update(data);
    }
    this.resetForm(form); //set input box to initial state
    this.toastr.success('You can now log in','Successful Register');
  }
}
