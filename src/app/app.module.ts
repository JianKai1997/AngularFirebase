import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//animation
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

//must import for forms
import { FormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { EmployeeComponent } from './empleyees/employee/employee.component';
import { EmployeeListComponent } from './empleyees/employee-list/employee-list.component';
import { EmployeeService } from './shared/employee.service';

import { AppMaterialModule } from './app-material.module';

//pwa
import { ServiceWorkerModule } from '@angular/service-worker';
import { OnlineStatusComponent } from './online-status/online-status.component';

//routing
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { EmployeeSearchComponent } from './empleyees/employee-search/employee-search.component';

//observable and fetch by http
import { HttpClientModule } from '@angular/common/http';
import { FetchHTTPwithObservableComponent } from './fetchObs/fetch-httpwith-observable.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    OnlineStatusComponent,
    EmployeeSearchComponent,
    routingComponents,
    FetchHTTPwithObservableComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence({experimentalTabSynchronization:true}),
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppMaterialModule,    //for import material / animations
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
