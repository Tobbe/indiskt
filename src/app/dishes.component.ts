import { Component, OnInit } from '@angular/core';

import { Dish } from './dish';
import { DishService } from './dish.service';

@Component({
  selector: 'my-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: [ './dishes.component.css' ],
})
export class DishesComponent implements OnInit {
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
