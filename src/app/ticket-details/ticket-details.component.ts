import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ticket, tickets_list } from '../tickets';

@Component({
  selector: 'app-ticket-details',
  standalone: true,
  imports: [],
  templateUrl: './ticket-details.component.html',
  styleUrl: './ticket-details.component.css'
})
export class TicketDetailsComponent {
  ticketInfo:any | undefined

  constructor(
    private route:ActivatedRoute
  ){}
  ngOnInit():void{
    const params = this.route.snapshot.paramMap
    const ticketId = Number(params.get('ticketid'))
    this.ticketInfo = ticketId
    console.log(ticketId)
  }

}
