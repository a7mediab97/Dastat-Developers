import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { throttle } from '@swimlane/ngx-charts/release/utils';
import { AdminService } from '../../@services/adminService.service';
import { Admin } from '../../@objects/admin';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Alert } from '../../@objects/alert';
import { ModalAdmin } from '../modals/admin.component';

@Component({
  selector: 'app-branch-manager',
  templateUrl: './branch-manager.component.html',
  styleUrls: ['./branch-manager.component.scss']
})
export class BranchManagerComponent implements OnInit {

  cinema_name: string;
  username: string;

  editing = {};
  rows: Admin[];
  alert: Alert = new Alert();

  constructor(public adminService: AdminService, private router : Router, public cookie : CookieService, private route : ActivatedRoute, public modalService: NgbModal) { }

  ngOnInit() {

    var data = {
      username: this.cookie.getObject('auth')['username'], 
    }
    
    this.adminService.getBranchManagers(data).subscribe((response)=>{
      this.rows = response.data;
    });
  }
  updateValue(admin) {
    const modalRef = this.modalService.open(ModalAdmin);
    modalRef.componentInstance.admin = admin;
    modalRef.componentInstance.type = "BM";
    modalRef.result.then((result) => {
      this.alert = result;
      this.ngOnInit();
    });
  }
  deleteRow(admin) {
    this.adminService.deleteBranchManager(admin).subscribe(() => {
      this.alert = {
        message: 'Admin Deleted',
        type: 'success',
        active: true
      }

      this.ngOnInit();
    });
  }
  // updateFilter(event) {
  //   const val = event.target.value;
  //   var data = {
  //     cinema_name: val
  //   }
  //   this.adminService.getBranchManager(data).subscribe((response)=>{
  //     this.rows = response;
  //   });
  // }
}
