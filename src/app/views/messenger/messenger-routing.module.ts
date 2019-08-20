import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MessengerComponent} from './messenger.component';

const routes: Routes = [
  {
    path: '',
    component: MessengerComponent,
    data: {
      title: 'Quản lý tin nhắn'
    },
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessengerRoutingModule { }
