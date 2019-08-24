import {Component, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {CreateStaffComponent} from './create-staff/create-staff.component';
import {StaffService} from './staff.service';

@Component({
  templateUrl: 'staff.component.html'
})
export class StaffComponent implements OnInit {
  bsModalRef: BsModalRef;
  dataTable: any = [];
  searchText;

  constructor(
    private modalService: BsModalService,
    private  serviceStaff: StaffService
  ) {
  }

  ngOnInit() {
    this.getAllStaff();
  }

  actionStaff(type, data: any = null) {
    this.bsModalRef = this.modalService.show(CreateStaffComponent, {
      initialState: {
        type: type,
        data: data,
        buttonClicked: this.modalButtonClicked.bind(this)
      },
      class: 'modal-lg'
    });
  }

  getAllStaff() {
    this.serviceStaff.getAllStaff().subscribe(res => {
      console.log(res);
      this.dataTable = res;
    });
  }

  modalButtonClicked(data) {
    if (data) {
      this.getAllStaff();
    }
  }
}


