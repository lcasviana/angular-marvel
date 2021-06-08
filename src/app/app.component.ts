import { Component } from '@angular/core';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title: string = 'Angular Marvel';

  public menu: { name: string, route: string }[] = [
    { name: 'Characters', route: '/characters' },
    { name: 'Comics', route: '/comics' },
  ];
}
