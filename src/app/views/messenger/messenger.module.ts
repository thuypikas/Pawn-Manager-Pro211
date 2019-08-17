import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MessengerRoutingModule} from './messenger-routing.module';
import {ModalModule} from 'ngx-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MessengerComponent } from './messenger.component';
import { CreateMessengerComponent } from './create-messenger/create-messenger.component';



@NgModule({
  declarations: [MessengerComponent, CreateMessengerComponent],
  imports: [
    CommonModule,
    MessengerRoutingModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [CreateMessengerComponent]
})
export class MessengerModule { }
