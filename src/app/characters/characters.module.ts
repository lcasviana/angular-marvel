import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './components/characters.component';
import { CharactersService } from './services/characters.service';
import { CharacterComponent } from './components/character/character.component';

@NgModule({
  declarations: [
    CharactersComponent,
    CharacterComponent,
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