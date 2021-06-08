import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StoriesRoutingModule } from './stories-routing.module';
import { StoriesComponent } from './components/stories.component';
import { StoriesService } from './services/stories.service';

@NgModule({
  declarations: [
    StoriesComponent
  ],
  imports: [
    StoriesRoutingModule,
    SharedModule,
  ],
  providers: [
    StoriesService,
  ],
})
export class StoriesModule { }