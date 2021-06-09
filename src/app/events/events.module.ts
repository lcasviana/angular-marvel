import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './components/events.component';
import { EventsService } from './services/events.service';
import { EventComponent } from './components/event/event.component';

@NgModule({
  declarations: [
    EventsComponent,
    EventComponent,
  ],
  imports: [
    EventsRoutingModule,
    SharedModule,
  ],
  providers: [
    EventsService,
  ],
})
export class EventsModule { }