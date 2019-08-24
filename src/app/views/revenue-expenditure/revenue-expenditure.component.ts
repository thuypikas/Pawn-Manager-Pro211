import {Component, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {RevenueExpenditureService} from './revenue-expenditure.service';
import {StaffService} from '../staff/staff.service';
import {ExcelService} from './excel.service';


@Component({
  selector: 'revenue-expenditure',
  templateUrl: './revenue-expenditure.component.html',
  styleUrls: ['./revenue-expenditure.component.css']
})
export class RevenueExpenditureComponent implements OnInit {
  dataTable: any[] = [];
  bsModalRef: BsModalRef;
  listStaff: any = [];

  constructor(
    private modalService: BsModalService,
    private serviceStaff: StaffService,
    private serviceRevenueExpenditure: RevenueExpenditureService,
    private excelService: ExcelService
  ) {
  }

  ngOnInit() {
    this.getListStaff();
    this.getAllRevenueExpenditure();
  }

  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.dataTable, 'sample');
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

  getAllRevenueExpenditure() {
    this.serviceRevenueExpenditure.getAllRevenueExpenditure().subscribe(res => {
      this.dataTable = res;
      console.log(res);

    });
  }

  formatNumber(nStr, decSeperate = '.', groupSeperate = '.') {
    return (+nStr).toLocaleString('vi-VN');
  }

  findStatusNameByCode(status) {
    if (status === true) {
      return 'Thu';
    } else if (status === false) {
      return 'Chi';
    }
  }


}
