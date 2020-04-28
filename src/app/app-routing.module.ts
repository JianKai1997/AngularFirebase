import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleyeesComponent } from './empleyees/empleyees.component';
import { LoginComponent } from './login/login.component'
import { FetchHTTPwithObservableComponent } from './fetchObs/fetch-httpwith-observable.component';

const routes : Routes = [
    { path: 'empleyees', component:EmpleyeesComponent},
    { path: 'login', component:LoginComponent},
    { path: 'fetchObs', component:FetchHTTPwithObservableComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule]
})

export class AppRoutingModule {}

export const routingComponents = [EmpleyeesComponent,LoginComponent,FetchHTTPwithObservableComponent]