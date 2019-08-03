import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from './customer.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    data: {
      title: 'Quản lý khách hàng'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {}
