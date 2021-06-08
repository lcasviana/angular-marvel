import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SeriesRoutingModule } from './series-routing.module';
import { SeriesComponent } from './components/series.component';
import { SeriesService } from './services/series.service';

@NgModule({
  declarations: [
    SeriesComponent
  ],
  imports: [
    SeriesRoutingModule,
    SharedModule,
  ],
  providers: [
    SeriesService,
  ],
})
export class SeriesModule { }