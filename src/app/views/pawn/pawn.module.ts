// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OrderComponent } from './order.component';

// Pawn Routing
import { PawnRoutingModule } from './pawn-routing.module';
import { CreateOrderComponent } from './create-order/create-order.component';
import {BsDropdownModule, BsModalService, ModalModule} from 'ngx-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PrintOrderComponent } from './print-order/print-order.component';
import { SendOrderComponent } from './send-order/send-order.component';
import { PayOrderComponent } from './pay-order/pay-order.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    PawnRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  declarations: [
    OrderComponent,
    CreateOrderComponent,
    PrintOrderComponent,
    SendOrderComponent,
    PayOrderComponent
  ],
  entryComponents: [
    CreateOrderComponent,
    PrintOrderComponent,
    SendOrderComponent,
    PayOrderComponent
  ],
  providers: [BsModalService]
})
export class PawnModule { }
