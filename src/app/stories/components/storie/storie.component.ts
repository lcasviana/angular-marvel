import { Component, Input } from '@angular/core';
import { Storie } from '../../models/stories.model';

@Component({
  selector: 'storie',
  templateUrl: './storie.component.html',
  styleUrls: ['./storie.component.scss']
})
export class StorieComponent {
  @Input('data') storie!: Storie;
}
