import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from '@angular/router';
import {MessengerComponent} from '../messenger/messenger.component';

const routes: Routes = [
  {
    path: '',
    component: MessengerComponent,
    data: {
      title: 'Quản lý hợp đồng'
    },
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ContractRoutingModule { }
