import { Component } from '@angular/core';
import { StoriesService } from '../services/stories.service';

@Component({
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent {
  public constructor(public storiesService: StoriesService) { }
}
