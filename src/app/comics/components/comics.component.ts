import { Component } from '@angular/core';
import { ComicsService } from '../services/comics.service';

@Component({
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent {
  public constructor(public comicsService: ComicsService) { }
}