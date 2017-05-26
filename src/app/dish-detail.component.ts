import { Component, Input } from '@angular/core';

import { Dish } from './dish';

@Component({
  selector: 'dish-detail',
  template: `
    <div *ngIf="dish">
      <h2>{{dish.name}} details!</h2>
      <div><label>id: </label>{{dish.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="dish.name" placeholder="name"/>
      </div>
    </div>
  `
})
export class DishDetailComponent {
  @Input() dish: Dish;
}
