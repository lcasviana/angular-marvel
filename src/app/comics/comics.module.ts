import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ComicsRoutingModule } from './comics-routings.module';
import { ComicsComponent } from './components/comics.component';
import { ComicsService } from './services/comics.service';

@NgModule({
  declarations: [
    ComicsComponent,
  ],
  imports: [
    ComicsRoutingModule,
    SharedModule,
  ],
  providers: [
    ComicsService,
  ],
})
export class ComicsModule { }