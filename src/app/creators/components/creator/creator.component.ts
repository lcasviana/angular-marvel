import { Component, Input } from '@angular/core';
import { Creator } from '../../models/creators.model';

@Component({
  selector: 'creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss']
})
export class CreatorComponent {
  @Input('data') creator!: Creator;
}
