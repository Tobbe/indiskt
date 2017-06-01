import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { DishService } from './dish.service';

import { Dish } from './dish';

@Component({
  selector: 'dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: [ './dish-detail.component.css' ],
})
export class DishDetailComponent implements OnInit {
  dish: Dish;

  constructor(
    private dishService: DishService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.dishService.getDish(+params['id']))
      .subscribe(dish => this.dish = dish);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.dishService
      .update(this.dish)
      .then(() => this.goBack());
  }
}
