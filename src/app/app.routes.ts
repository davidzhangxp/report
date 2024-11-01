import { Routes } from '@angular/router';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:'',component:TicketListComponent},
    {path:'login',component:LoginComponent}
];
