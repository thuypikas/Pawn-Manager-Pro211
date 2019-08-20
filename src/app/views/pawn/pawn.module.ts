// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OrderComponent } from './order.component';

// Pawn Routing
import { PawnRoutingModule } from './pawn-routing.module';
import { CreateOrderComponent } from './create-order/create-order.component';
import {BsDropdownModule, BsModalService, ModalModule} from 'ngx-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PawnRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    ModalModule.forRoot(),
    ReactiveFormsModule
  ],
  declarations: [
    OrderComponent,
    CreateOrderComponent
  ],
  entryComponents: [
    CreateOrderComponent
  ],
  providers: [BsModalService]
})
export class PawnModule { }
