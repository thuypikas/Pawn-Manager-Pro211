// Angular
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';
// Components Routing
import { CustomerRoutingModule } from './customer-routing.module';
import {ModalModule} from 'ngx-bootstrap';
import {CustomerComponent} from './customer.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomerRoutingModule,
    TabsModule,
    ModalModule.forRoot(),
    ReactiveFormsModule
  ],
  declarations: [
    CustomerComponent,
    CreateCustomerComponent
  ],
  entryComponents: [
    CreateCustomerComponent
  ]
})
export class CustomerModule { }
