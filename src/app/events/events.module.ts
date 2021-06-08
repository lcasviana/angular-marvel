import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './components/events.component';
import { EventsService } from './services/events.service';

@NgModule({
  declarations: [
    EventsComponent
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