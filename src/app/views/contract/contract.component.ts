import {Component, OnInit} from '@angular/core';
import {StaffService} from '../staff/staff.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {MessengerService} from '../messenger/messenger.service';
import {CustomerService} from '../customer/customer.service';
import {PawnService} from '../pawn/pawn.service';
import {ProductService} from '../product/product.service';
import {CreateContactComponent} from './create-contact/create-contact.component';

@Component({
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  bsModalRef: BsModalRef;
  dataTable: any = [];
  listCus: any = [];
  listStaff: any = [];
  listProduct: any = [];

  constructor(
    private modalService: BsModalService,
    private service: MessengerService,
    private serviceCustomer: CustomerService,
    private serviceStaff: StaffService,
    private serviceOrder: PawnService,
    private serviceProduct: ProductService
  ) {
  }

  ngOnInit() {
    this.getAllOrder();
    this.getListCustomer();
    this.getListStaff();
    this.getListProduct();
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
  actionAccept(type, data: any = null) {
    this.bsModalRef = this.modalService.show(CreateContactComponent, {
      initialState: {
        type: type,
        data: data,
        buttonClicked: this.modalButtonClicked.bind(this)
      },
      class: 'modal-sm'
    });
  }

  getAllOrder() {
    this.serviceOrder.getAllOrder().subscribe(res => {
        this.dataTable = res.filter(e => e.status === 0);
    });
  }
  modalButtonClicked(data) {
    console.log(data);
    if (data) {
      console.log('f', data);
      this.getAllOrder();
    }
  }
}
