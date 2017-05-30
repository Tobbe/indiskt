import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <a routerLink="/dishes">Dishes</a>
    <router-outlet></router-outlet>
    `,
})
export class AppComponent {
  title = 'Indian food order form';
};
