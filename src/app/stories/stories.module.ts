import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StoriesRoutingModule } from './stories-routing.module';
import { StoriesComponent } from './components/stories.component';
import { StoriesService } from './services/stories.service';
import { StorieComponent } from './components/storie/storie.component';

@NgModule({
  declarations: [
    StoriesComponent,
    StorieComponent,
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