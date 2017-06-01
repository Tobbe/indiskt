import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Dish } from './dish';

@Injectable()
export class DishService {
  private dishesUrl = 'api/dishes';
  private headers = new Headers({'Content-Type': 'application/json'});

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

  create(name: String): Promise<Dish> {
    return this.http
      .post(this.dishesUrl, JSON.stringify({name: name}), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data as Dish)
      .catch(this.handleError);
  }

  update(dish: Dish): Promise<Dish> {
    const url = `${this.dishesUrl}/${dish.id}`;

    return this.http
      .put(url, JSON.stringify(dish), {headers: this.headers})
      .toPromise()
      .then(() => dish)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.dishesUrl}/${id}`;

    return this.http
      .delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);

    return Promise.reject(error.message || error);
  }
}
