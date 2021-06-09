import { Component } from "@angular/core";

@Component({
  selector: 'shell',
  templateUrl: 'shell.component.html',
  styleUrls: ['shell.component.scss'],
})
export class ShellComponent {
  public title: string = 'Angular Marvel';

  public menu: { name: string, route: string }[] = [
    { name: 'Characters', route: '/characters' },
    { name: 'Comics', route: '/comics' },
    { name: 'Creators', route: '/creators' },
    { name: 'Events', route: '/events' },
    { name: 'Series', route: '/series' },
    { name: 'Stories', route: '/stories' },
  ];
}