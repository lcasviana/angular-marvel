import { Component, Input } from '@angular/core';
import { Event } from '../../models/events.model';

@Component({
  selector: 'event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {
  @Input('data') event!: Event;
}
