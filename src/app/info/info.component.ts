import {Component, OnInit} from '@angular/core';
import {DetailsService} from "../details.service";
import {Employee} from "../employee";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {MatDialog} from "@angular/material";
import {FormComponent} from "../form/form.component";
import {AskDeleteComponent} from "../ask-delete/ask-delete.component";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  employee: Employee;
  index: number = +this.route.snapshot.params['id'];

  constructor(
    private detailsService: DetailsService,
    private route: ActivatedRoute,
    private location: Location,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.employee = this.detailsService.employees[this.index];
  }

  parseDate(date){
    return this.detailsService.parseDate(date)
  }

  askDelete() {
    this.dialog.open(AskDeleteComponent, {data: {index: this.index}})
  }

  goBack() {
    this.location.back();
  }

  openForm() {
    this.dialog.open(FormComponent, {data: {edit: true, employee: this.employee, index: this.index}});
  }

}
