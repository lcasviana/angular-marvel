import { Component, Input } from '@angular/core';
import { Serie } from '../../models/series.model';

@Component({
  selector: 'serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss']
})
export class SerieComponent {
  @Input('data') serie!: Serie;
}
