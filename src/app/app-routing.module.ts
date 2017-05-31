import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { DishesComponent }      from './dishes.component';
import { DishDetailComponent }  from './dish-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }, {
    path: 'dishes',
    component: DishesComponent,
  }, {
    path: 'detail/:id',
    component: DishDetailComponent,
  }, {
    path: 'dashboard',
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}