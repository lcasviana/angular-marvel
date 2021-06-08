import { Component } from '@angular/core';
import { CreatorsService } from '../services/creators.service';

@Component({
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.scss']
})
export class CreatorsComponent {
  public constructor(public creatorsService: CreatorsService) { }
}
