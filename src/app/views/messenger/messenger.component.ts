import { Component, OnInit } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {CreateMessengerComponent} from './create-messenger/create-messenger.component';

@Component({
  selector: 'messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit {
  dataTable: any[] = [];
  bsModalRef: BsModalRef;
  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit() {
  }
  actionMessenger(type, data: any = null) {
    this.bsModalRef = this.modalService.show(CreateMessengerComponent, {
      initialState: {
        type: type,
        data: data,
        buttonClicked: this.modalButtonClicked.bind(this)
      },
      class: 'modal-lg'
    });
  }
  modalButtonClicked(data) {
    console.log(data);
    if (data) {
    }
  }

}
