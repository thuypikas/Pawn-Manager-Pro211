import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContractRoutingModule} from './contract-routing.module';
import {BsDropdownModule, ModalModule} from 'ngx-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ContractComponent} from './contract.component';
import { CreateContactComponent } from './create-contact/create-contact.component';



@NgModule({
  declarations: [ContractComponent, CreateContactComponent],
  imports: [
    CommonModule,
    ContractRoutingModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
  ],
  entryComponents: [CreateContactComponent]
})
export class ContractModule { }
