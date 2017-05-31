import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { DashboardComponent }  from './dashboard.component';
import { DishesComponent }  from './dishes.component';
import { DishDetailComponent } from './dish-detail.component';
import { DishService } from './dish.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    DishesComponent,
    DishDetailComponent,
  ],
  providers: [
    DishService
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
