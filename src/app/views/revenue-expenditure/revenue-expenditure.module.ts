import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevenueExpenditureRoutingModule } from './revenue-expenditure-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { TabsModule, ModalModule } from 'ngx-bootstrap';
import { RevenueExpenditureComponent } from './revenue-expenditure.component';



@NgModule({
  declarations: [RevenueExpenditureComponent],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    TabsModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    RevenueExpenditureRoutingModule
  ]
})
export class RevenueExpenditureModule { }
