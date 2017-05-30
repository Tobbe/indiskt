import { Component, OnInit } from '@angular/core';

import { Dish } from './dish';
import { DishService } from './dish.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>Menu</h2>
    <ul class="dishes">
      <li *ngFor="let dish of dishes"
        [class.selected]="dish === selectedDish"
        (click)="onSelect(dish)">

        <span class="badge">{{dish.id}}</span> {{dish.name}}
      </li>
    </ul>
    <dish-detail [dish]="selectedDish"></dish-detail>
    `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .dishes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .dishes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .dishes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .dishes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .dishes .text {
      position: relative;
      top: -3px;
    }
    .dishes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
  providers: [DishService],
})

export class AppComponent implements OnInit {
  title = 'Indian food order form';
  dishes: Dish[];
  selectedDish: Dish;

  constructor(private dishService: DishService) { }

  ngOnInit(): void {
    this.getDishes();
  }

  onSelect(dish: Dish): void {
    this.selectedDish = dish;
  }

  getDishes(): void {
    this.dishService.getDishes()
      .then(dishes => this.dishes = dishes);
  }
}
