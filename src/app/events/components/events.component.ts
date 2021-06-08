import { Component } from '@angular/core';
import { EventsService } from '../services/events.service';

@Component({
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  public constructor(public eventsService: EventsService) { }
}
