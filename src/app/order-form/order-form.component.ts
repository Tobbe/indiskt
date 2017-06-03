import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

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
  model = new Order('tlb', 'Chicken Vindaloo', 'xhot', 'little', true, 'zero', '');
  orders: FirebaseListObservable<any[]>;

  constructor(private dishService: DishService, private router: Router, private db: AngularFireDatabase) { }

  ngOnInit(): void {
    this.orders = this.db.list('/orders');
  }

  onSubmit(): void {
    console.log('submit the form', this.model);
    this.model.date = new Date().toISOString();
    this.orders.push(this.model);
    this.router.navigate(['/ordersummary']);
  }

  get currentOrder(): string {
    return JSON.stringify(this.model);
  }
}
