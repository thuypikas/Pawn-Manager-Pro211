import {Component, Inject, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {CreateOrderComponent} from './create-order/create-order.component';


@Component({
  templateUrl: 'order.component.html'
})
export class OrderComponent implements OnInit {
  bsModalRef: BsModalRef;
  dataTable = [
    {id: 5, name: 'Nguyen Thi Thu Thuy', nameStaff: 'Tran Trung Hieu', account: 'thuyntt', status: 'n'},
    {id: 4, name: 'Nguyen Thi Thu', nameStaff: 'Tran Trung Hieu', account: 'thuyntt', status: 'n'},
    {id: 3, name: 'Nguyen Thu Thuy', nameStaff: 'Tran Trung Hieu', account: 'thuyntt', status: 'n'},
  ];

  constructor(
    private modalService: BsModalService
) {
  }

  ngOnInit() {
  }

  actionOder(type, data: any = null) {
    this.bsModalRef = this.modalService.show(CreateOrderComponent, {
      initialState: {
        type: type,
        data: data
      },
      class: 'modal-lg'
    });
  }

  payMoney() {
  }
}
