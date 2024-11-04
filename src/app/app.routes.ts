import { Routes } from '@angular/router';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { LoginComponent } from './login/login.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';

export const routes: Routes = [
    {path:'',component:TicketListComponent},
    {path:'login',component:LoginComponent},
    {path:'tickets/:ticketid',component:TicketDetailsComponent}
];
