import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

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
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
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
