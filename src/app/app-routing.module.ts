import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { OrderComponent }      from './order/order.component';
import { DishDetailComponent }  from './dish-detail/dish-detail.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }, {
    path: 'order',
    component: OrderComponent,
  }, {
    path: 'detail/:id',
    component: DishDetailComponent,
  }, {
    path: 'dashboard',
    component: DashboardComponent,
  }, {
    path: 'ordersummary',
    component: OrderSummaryComponent,
  },  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}