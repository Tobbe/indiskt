import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Dish } from '../dish';
import { DishService } from '../dish.service';

@Component({
  selector: 'my-order',
  templateUrl: './order.component.html',
  styleUrls: [ './order.component.css' ],
})
export class OrderComponent implements OnInit {
  dishes: Dish[];
  selectedDish: Dish;

  constructor(private dishService: DishService, private router: Router) { }

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

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedDish.id]);
  }

  add(name: string): void {
    name = name.trim();

    if (!name) { return; }

    this.dishService
      .create(name)
      .then(dish => {
        this.dishes.push(dish);
        this.selectedDish = null;
      });
  }

  delete(dish: Dish): void {
    this.dishService
      .delete(dish.id)
      .then(() => {
        this.dishes = this.dishes.filter(d => d !== dish);
        if (this.selectedDish === dish) { this.selectedDish = null; }
      });
  }
}
