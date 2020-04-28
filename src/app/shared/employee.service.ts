import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { AngularFirestore } from '@angular/fire/firestore';

import { HttpClient } from '@angular/common/http'
import { IEmployee } from '../employee';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData : Employee;
  private _url : string = "/assets/data/employee.json";

  //define function for retrieve all info in firebase
  constructor(private firestore : AngularFirestore, private http : HttpClient) { }

  getEmployees(){
    return this.firestore.collection('employees').snapshotChanges(); 
  }

  getEmployee2() : Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url);
  }
}
