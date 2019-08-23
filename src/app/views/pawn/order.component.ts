import {Component, Inject, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {CreateOrderComponent} from './create-order/create-order.component';
import {PawnService} from './pawn.service';
import {CustomerService} from '../customer/customer.service';
import {StaffService} from '../staff/staff.service';
import {ProductService} from '../product/product.service';
import {PrintOrderComponent} from './print-order/print-order.component';
import {SendOrderComponent} from './send-order/send-order.component';
import {PayOrderComponent} from './pay-order/pay-order.component';


@Component({
  templateUrl: 'order.component.html'
})
export class OrderComponent implements OnInit {
  bsModalRef: BsModalRef;
  dataTable: any = [];
  listCus: any = [];
  listStaff: any = [];
  listProduct: any = [];

  constructor(
    private modalService: BsModalService,
    private serviceOrder: PawnService,
    private serviceCustomer: CustomerService,
    private serviceStaff: StaffService,
    private serviceProduct: ProductService
  ) {
  }

  ngOnInit() {
    this.getAllOrder();
    this.getListCustomer();
    this.getListStaff();
    this.getListProduct();
  }

  actionOrder(type, data: any = null) {
    this.bsModalRef = this.modalService.show(CreateOrderComponent, {
      initialState: {
        type: type,
        data: data,
        buttonClicked: this.modalButtonClicked.bind(this)
      },
      class: 'modal-lg'
    });
  }

  actionPrint(type, data: any = null) {
    this.bsModalRef = this.modalService.show(PrintOrderComponent, {
      initialState: {
        type: type,
        data: data,
      },
      class: 'modal-sm'
    });
  }
  actionSend(type, data) {
    this.bsModalRef = this.modalService.show(SendOrderComponent, {
      initialState: {
        type: type,
        data: data,
        buttonClicked: this.modalButtonClicked.bind(this)
      },
      class: 'modal-md'
    });
  }
  actionPay(type, data) {
    this.bsModalRef = this.modalService.show(PayOrderComponent, {
      initialState: {
        type: type,
        data: data,
      },
      class: 'modal-md'
    });
  }
  getListCustomer() {
    this.serviceCustomer.getAllCustomer().subscribe(res => {
      this.listCus = res;
    });
  }

  getListStaff() {
    this.serviceStaff.getAllStaff().subscribe(res => {
      this.listStaff = res;
    });
  }

  getListProduct() {
    this.serviceProduct.getAllProduct().subscribe(res => {
      this.listProduct = res;
    });
  }

  findCustomerNameById(id) {
    const res = this.listCus.find((e) => {
      return id = e._id;
    });
    return res ? res.fullname : null;
  }

  findStaffNameById(id) {
    const res = this.listStaff.find((e) => {
      return id = e._id;
    });
    return res ? res.fullname : null;
  }

  findProductNameById(id) {
    const res = this.listProduct.find((e) => {
      return id = e._id;
    });
    return res ? res.name : null;
  }

  findStatusNameByCode(status) {
    if (status === 0) {
      return 'Chờ duyệt';
    } else if (status === 1) {
      return 'Đợi thanh toán';
    } else {
      return 'Đã đóng tiền';
    }
  }

  getAllOrder() {
    this.serviceOrder.getAllOrder().subscribe(res => {
      this.dataTable = res.filter(e => e.status === 1);
    });
  }

  modalButtonClicked(data) {
    if (data) {
      this.getAllOrder();
    }
  }
}
