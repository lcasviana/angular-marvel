import { Component } from '@angular/core';
import { SeriesService } from '../services/series.service';

@Component({
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent {
  public constructor(public seriesService: SeriesService) { }
}
