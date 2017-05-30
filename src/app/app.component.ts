import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <my-dishes></my-dishes>
    `,
})
export class AppComponent {
  title = 'Indian food order form';
};
