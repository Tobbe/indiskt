import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
}
