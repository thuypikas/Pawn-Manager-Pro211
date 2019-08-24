import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { StaffService } from '../staff/staff.service';
import { CapitalService } from './capital.service';

@Component({
  selector: 'capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.css']
})
export class CapitalComponent implements OnInit {
  dataTable: any[] = [];
  bsModalRef: BsModalRef;
  listStaff: any = [];

  public pieChartLabels: string[] = ['Lã Văn Công', 'Nguyễn Thị Thu Thủy', 'Phạm Thị Tâm'];
  public pieChartData: number[] = [30, 50, 20];
  public pieChartType = 'pie';

  constructor(
    private modalService: BsModalService,
    private serviceCapital: CapitalService,
    private serviceStaff: StaffService

  ) { }

  ngOnInit() {
    this.getListStaff();
    this.getAllCapital()
    
  }
  getListStaff() {
    this.serviceStaff.getAllStaff().subscribe(res => {
      this.listStaff = res;
    });
  }
  findStaffNameById(id) {
    const res = this.listStaff.find((e) => {
      return id === e._id;
    });
    return res ? res.fullname : null;
  }
  getAllCapital() {
    this.serviceCapital.getAllCapital().subscribe(res => {
      this.dataTable = res
      console.log(res);
      
    });
  }
  formatNumber(nStr, decSeperate = '.', groupSeperate = '.') {
    return (+nStr).toLocaleString('vi-VN');
  }
}
