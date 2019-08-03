import { Component } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {CreateStaffComponent} from './create-staff/create-staff.component';

@Component({
  templateUrl: 'staff.component.html'
})
export class StaffComponent {
  bsModalRef: BsModalRef;
  dataTable = [
    {id: 5, account: 'thuyntt', name: 'Nguyen Thi Thu Thuy', cmt: '2855', phone: '552125', images: 'anh', position: 'Nhan vien'},
    {id: 4, account: 'thuyntt', name: 'Nguyen Thi Thu', cmt: '785657',  phone: '58852', images: 'anh', position: 'Nhan vien'},
    {id: 3, account: 'thuyntt', name: 'Nguyen Thu Thuy', cmt: '865865', phone: '8545415', images: 'anh', position: 'Nhan vien'},
  ];
  constructor(
    private modalService: BsModalService
  ) { }
  actionStaff(type, data: any = null) {
    this.bsModalRef = this.modalService.show(CreateStaffComponent, {
      initialState: {
        type: type,
        data: data
      },
      class: 'modal-lg'
    });
  }
}


