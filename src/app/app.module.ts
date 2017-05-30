import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { DishesComponent }  from './dishes.component';
import { DishDetailComponent } from './dish-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'dishes',
        component: DishesComponent,
      }
    ]),
  ],
  declarations: [
    AppComponent,
    DishesComponent,
    DishDetailComponent,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
