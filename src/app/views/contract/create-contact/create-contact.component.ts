import { Component, OnInit } from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {FormBuilder} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {PawnService} from '../../pawn/pawn.service';

@Component({
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {
  type: any;
  data: any;
  buttonClicked: any;
  constructor(
    public modalAdd: BsModalRef,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private serviceOrder: PawnService,
  ) { }

  ngOnInit() {
  }

  submit() {
    this.data.status = 1;
    if (this.type == 'accept') {
      this.serviceOrder.updateOrder(this.data).subscribe(res => {
        console.log(res);
        this.toastr.success('Duyệt thành công');
        this.buttonClicked(true);
        this.modalAdd.hide();
      });
    }
  }

}
