import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContractComponent} from './contract.component';

const routes: Routes = [
  {
    path: '',
    component: ContractComponent,
    data: {
      title: 'Quản lý hợp đồng'
    },
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule { }
