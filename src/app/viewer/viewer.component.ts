import {Component, OnInit} from '@angular/core';
import {DetailsService} from "../details.service";
import {Employee} from "../employee";
import {MatDialog} from "@angular/material";
import {FormComponent} from "../form/form.component";
import {AngularFireDatabase} from "@angular/fire/database";
import {Observable} from "rxjs/internal/Observable";

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {

  employees;
  init: Observable<any[]>;
  employeesObj;
  stateAlert: {state: boolean, message: string};

  constructor(
    private detailsService: DetailsService,
    public dialog: MatDialog,
    private db: AngularFireDatabase) {
    this.stateAlert = this.detailsService.stateAlert;
  }

  ngOnInit() {
    this.db.list('/employees').valueChanges().subscribe((data) => {
      this.employees = data;
      this.detailsService.getEmployees(this.employees);
    });
    this.db.list('/employees').snapshotChanges().subscribe((data) => {
      this.employeesObj = data;
      this.detailsService.getEmployeesObj(this.employeesObj);
    })
  }


  openForm() {
    this.dialog.open(FormComponent, {data: {edit: false, employee: Employee}})
  }


}
