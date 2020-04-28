import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-fetch-httpwith-observable',
  templateUrl: './fetch-httpwith-observable.component.html',
  styleUrls: ['./fetch-httpwith-observable.component.css']
})
export class FetchHTTPwithObservableComponent implements OnInit {

  public employeelist = [];

  constructor(private employee : EmployeeService) { }

  ngOnInit() {
    this.employee.getEmployee2()
      .subscribe(data => this.employeelist = data);
  }

}
