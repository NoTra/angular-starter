import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{ title }}</h1>
    <h3>Heroes</h3>
    <ul class="heroes">
      <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === currentHero">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <my-hero-detail [hero]="currentHero"></my-hero-detail>
  `,
  directives: [HeroDetailComponent]
})

export class AppComponent {
  public title: string;
  public currentHero: Hero;
  public heroes: Hero[];

  constructor() {
    this.title = 'Tour of Heroes';
    this.heroes = [
      new Hero(1, 'Windstorm'),
      new Hero(2, 'Bombasto'),
      new Hero(3, 'Magneta'),
      new Hero(4, 'Tornado'),
      new Hero(5, 'Mr. Nice'),
      new Hero(6, 'Narco'),
      new Hero(7, 'Dr IQ')
    ];
    // this.currentHero = this.heroes[0];
  }

  onSelect(hero: Hero) { this.currentHero = hero; }
}
