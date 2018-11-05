import {Component, OnDestroy, OnInit} from '@angular/core';
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
export class InfoComponent implements OnInit, OnDestroy {

  employee: Employee;
  index: number = +this.route.snapshot.params['id'];
  urlImage;

  constructor(
    private detailsService: DetailsService,
    private route: ActivatedRoute,
    private location: Location,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.employee = this.detailsService.employees[this.index];
    this.urlImage = this.detailsService.stateUrl;
    this.detailsService.getImage(this.employee.image, this.index);
  }

  ngOnDestroy() {
    this.urlImage.url = '';
  }

  parseDate(date){
    return this.detailsService.parseDate(date)
  }

  askDelete() {
    this.dialog.open(AskDeleteComponent, {data: {userDelete: true, index: this.index, hasImage: this.employee.image}})
  }

  goBack() {
    this.location.back();
  }

  openForm() {
    this.dialog.open(FormComponent, {data: {edit: true, employee: this.employee, index: this.index}});
  }


}
