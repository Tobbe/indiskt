import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { DashboardComponent }  from './dashboard.component';
import { DishesComponent }  from './dishes.component';
import { DishDetailComponent } from './dish-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }, {
        path: 'dishes',
        component: DishesComponent,
      }, {
        path: 'dashboard',
        component: DashboardComponent,
      },
    ]),
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    DishesComponent,
    DishDetailComponent,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
