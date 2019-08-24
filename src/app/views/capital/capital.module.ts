import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CapitalRoutingModule} from './capital-routing.module';
import {CapitalComponent} from './capital.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ModalModule, TabsModule} from 'ngx-bootstrap';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [ CapitalComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    TabsModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    CapitalRoutingModule
  ]
})
export class CapitalModule { }
