import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RevenueExpenditureComponent } from './revenue-expenditure.component';

const routes: Routes = [
  {
    path: '',
    component: RevenueExpenditureComponent,
    data: {
      title: 'Quản lý thu chi'
    },
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class RevenueExpenditureRoutingModule { }
