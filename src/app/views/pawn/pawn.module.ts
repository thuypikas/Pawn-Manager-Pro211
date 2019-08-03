// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OrderComponent } from './order.component';

// Pawn Routing
import { PawnRoutingModule } from './pawn-routing.module';
import { CreateOrderComponent } from './create-order/create-order.component';
import {BsModalService, ModalModule} from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    PawnRoutingModule,
    ModalModule.forRoot()
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
