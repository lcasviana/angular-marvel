import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CreatorsRoutingModule } from './creators-routing.module';
import { CreatorsComponent } from './components/creators.component';
import { CreatorsService } from './services/creators.service';
import { CreatorComponent } from './components/creator/creator.component';

@NgModule({
  declarations: [
    CreatorsComponent,
    CreatorComponent,
  ],
  imports: [
    CreatorsRoutingModule,
    SharedModule,
  ],
  providers: [
    CreatorsService,
  ],
})
export class CreatorsModule { }