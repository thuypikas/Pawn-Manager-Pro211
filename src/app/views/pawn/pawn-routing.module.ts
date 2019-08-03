import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderComponent } from './order.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Cầm đồ'
    },
    children: [
      {
        path: '',
        redirectTo: 'order'
      },
      {
        path: 'order',
        component: OrderComponent,
        data: {
          title: 'Tạo đơn hàng'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PawnRoutingModule {}
