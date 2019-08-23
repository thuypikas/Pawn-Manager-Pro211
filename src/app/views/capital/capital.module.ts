import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CapitalRoutingModule} from './capital-routing.module';
import {CapitalComponent} from './capital.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ModalModule, TabsModule} from 'ngx-bootstrap';



@NgModule({
  declarations: [ CapitalComponent ],
  imports: [
    CommonModule,
    FormsModule,
    TabsModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    CapitalRoutingModule
  ]
})
export class CapitalModule { }
