import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CapitalComponent} from './capital.component';
const routes: Routes = [
  {
    path: '',
    component: CapitalComponent,
    data: {
      title: 'Quản lý nguồn vốn'
    },
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class CapitalRoutingModule { }
