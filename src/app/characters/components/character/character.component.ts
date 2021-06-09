import { Component, Input } from '@angular/core';
import { Character } from '../../models/characters.model';

@Component({
  selector: 'character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {
  @Input('data') character!: Character;
}
