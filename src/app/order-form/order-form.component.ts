import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Dish } from '../dish';
import { DishService } from '../dish.service';
import { Order } from '../order.model';

@Component({
  selector: 'order-form',
  templateUrl: './order-form.component.html',
  styleUrls: [ './order-form.component.css' ],
})
export class OrderFormComponent implements OnInit {
  dishes: Dish[];
  selectedDish: Dish;
  model = new Order('tlb', 'Chicken Vindaloo', 'xhot', 'little', 'zero', '');

  constructor(private dishService: DishService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('submit the form', this.model);
  }

  get currentOrder(): string {
    return JSON.stringify(this.model);
  }
}
