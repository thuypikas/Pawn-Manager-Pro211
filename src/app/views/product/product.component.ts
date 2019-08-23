import {Component, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {CreateProductComponent} from './create-product/create-product.component';
import {ProductService} from './product.service';

@Component({
  templateUrl: 'product.component.html'
})
export class ProductComponent implements  OnInit {
  bsModalRef: BsModalRef;
  dataProductTable: any[] = [];

  constructor(
    private modalService: BsModalService,
    private  serviceProduct: ProductService
  ) { }

  ngOnInit() {
    this.getAllProduct();
  }
  actionProduct(type, data: any = null) {
    this.bsModalRef = this.modalService.show(CreateProductComponent, {
      initialState: {
        type: type,
        data: data,
        buttonClicked: this.modalButtonClicked.bind(this)
      },
      class: 'modal-lg'
    });
  }
  getAllProduct() {
    this.serviceProduct.getAllProduct().subscribe(res => {
      this.dataProductTable = res;
    });
  }
  modalButtonClicked(data) {
    if (data) {
      this.getAllProduct();
    }
  }

}


