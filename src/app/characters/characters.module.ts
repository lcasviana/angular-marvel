import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './components/characters.component';
import { CharactersService } from './services/characters.service';

@NgModule({
  declarations: [
    CharactersComponent
  ],
  imports: [
    CharactersRoutingModule,
    SharedModule,
  ],
  providers: [
    CharactersService,
  ],
})
export class CharactersModule { }