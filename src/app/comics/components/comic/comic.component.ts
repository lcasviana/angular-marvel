import { Component, Input } from '@angular/core';
import { Comic } from '../../models/comics.model';

@Component({
  selector: 'comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss']
})
export class ComicComponent {
  @Input('data') comic!: Comic;
}
