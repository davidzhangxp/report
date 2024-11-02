import { Component, OnInit } from '@angular/core';
import { tickets_list } from '../tickets';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css'
})
export class TicketListComponent {


   tickets = tickets_list


}
