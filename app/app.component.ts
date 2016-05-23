import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{ title }}</h1>
    <h2>{{ hero }} details !</h2>
    <p>Heroes : </p>
    <ul>
      <li *ngFor="let hero of heroes">{{ hero }}</li>
    </ul>
  `
})

export class AppComponent {
  title: string;
  hero: string;
  heroes: string[];

  constructor() {
    this.title = 'Tour of Heroes';
    this.heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    this.hero = this.heroes[0];
  }
}
