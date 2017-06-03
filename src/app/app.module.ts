import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { DashboardComponent }  from './dashboard/dashboard.component';
import { OrderComponent }  from './order/order.component';
import { OrderFormComponent }  from './order-form/order-form.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { DishesComponent }  from './dishes/dishes.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import { DishSearchComponent } from './dish-search/dish-search.component';
import { DishService } from './dish.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OrderComponent,
    OrderFormComponent,
    OrderSummaryComponent,
    DishesComponent,
    DishDetailComponent,
    DishSearchComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
  ],
  providers: [
    DishService
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
