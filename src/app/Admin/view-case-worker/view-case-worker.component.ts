import { Component, OnInit } from '@angular/core';
import { CaseWorkerServiceService } from '../case-worker-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from "@angular/router";
@Component({
  selector: 'app-view-case-worker',
  templateUrl: './view-case-worker.component.html',
  styleUrls: ['./view-case-worker.component.css']
})
export class ViewCaseWorkerComponent implements OnInit {

  casewokersSubscribe: any;
  caseworkersResult: any;
  totalPages: any;
  currentPageNumber: any;
  activateStatus: any;
  deactivateStatus: any;
  constructor(private caseWorkerService: CaseWorkerServiceService, private route: Router) {

  }

  ngOnInit() {
    console.log("inside");
    this.casewokersSubscribe = this.caseWorkerService.getCaseworkersInfo().subscribe(
      res => {
        this.caseworkersResult = res.caseWorkers;
        this.totalPages = res.tp;
        this.currentPageNumber = res.cpn;
      }, this._errorCallBack

    );
  }
  public _errorCallBack = (err: HttpErrorResponse) => {
    if (err.error instanceof Error) {
      console.log("Client side errors")
    } else {
      console.log(err)
      console.log("server side errors");
    }
  }
  editCaseWorker(obj: any) {
    confirm("Are you sure wants to update?");
    console.log(obj)
  }

  deactivateCaseWorker(obj: any) {
    confirm("Are you sure wants to deactivate?");
    this.caseWorkerService.deactivateCaseWorker(obj).subscribe(
      res => {
        this.deactivateStatus = res;
        if (this.deactivateStatus) {
          this.ngOnInit();
          console.log("insideeeee")
        }
      }, this._errorCallBack
    );
  }
  activateCaseWorker(emailId: any) {
    confirm("Are you sure wants to Activate?");
    this.caseWorkerService.activateCaseWorker(emailId).subscribe(
      data => {
        this.activateStatus = data;
        if (this.activateStatus) {
          this.ngOnInit();
        }
      }
      , this._errorCallBack);

  }

}
