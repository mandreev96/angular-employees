import {Component, OnInit} from '@angular/core';
import {DetailsService} from "../details.service";
import {Employee} from "../employee";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {MatDialog} from "@angular/material";
import {FormComponent} from "../form/form.component";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  employee: Employee;
  index: string = this.route.snapshot.params['id'];

  constructor(
    private detailsService: DetailsService,
    private route: ActivatedRoute,
    private location: Location,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.addInfo()
  }

  searchThisEmployee(index) {
    for (let k in this.detailsService.employees) {
      if (this.detailsService.employees[k].key === index) {
        return this.detailsService.employees[k];
      }
    }
  }

  addInfo() {
    this.employee = this.searchThisEmployee(this.index);
  }

  delEmployee() {
    this.detailsService.delEmployee(this.index);
    this.location.back();
  }

  goBack() {
    this.location.back();
  }

  openForm() {
    this.dialog.open(FormComponent, {data: {edit: true, employee: this.employee, index: this.index}});
  }

}
