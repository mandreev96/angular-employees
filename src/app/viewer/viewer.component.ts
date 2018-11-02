import { Component, OnInit } from '@angular/core';
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

  employees: Employee[];
  init: Observable<any[]>;

  constructor(
    private detailsService: DetailsService,
    public dialog: MatDialog,
    private db: AngularFireDatabase) {
    this.init = db.list('/').valueChanges();
  }

  ngOnInit() {
    this.detailsService.readEmployees();
    this.employees = this.detailsService.employees;
    console.log(this.detailsService.employees)
  }


  openForm() {
    this.dialog.open(FormComponent, {data: {edit: false, employee: Employee}})
  }

}
