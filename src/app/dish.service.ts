import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Dish } from './dish';

@Injectable()
export class DishService {
  private dishesUrl = 'api/dishes';

  constructor(private http: Http) { }

  getDishes(): Promise<Dish[]> {
    return this.http
      .get(this.dishesUrl)
      .toPromise()
      .then(response => response.json().data as Dish[])
      .catch(this.handleError);
  }

  getDish(id: number): Promise<Dish> {
    const url = `${this.dishesUrl}/${id}`;

    return this.http
      .get(url)
      .toPromise()
      .then(response => response.json().data as Dish)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);

    return Promise.reject(error.message || error);
  }
}
