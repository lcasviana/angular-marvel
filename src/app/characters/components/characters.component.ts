import { Component } from '@angular/core';
import { CharactersService } from '../services/characters.service';

@Component({
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {
  public constructor(public charactersService: CharactersService) { }
}
