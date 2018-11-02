import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {DetailsService} from "../details.service";
import {Employee} from "../employee";
import {Location} from "@angular/common";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @ViewChild('formTag') formTag;
  @ViewChild('form') form;
  employee: Employee;

  constructor(private matDialogRef: MatDialogRef<FormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private details: DetailsService,
              private location: Location) { }

  ngOnInit() {
    console.log(this.data)
    console.log(this.form.value)
  }

  closeForm() {
    this.matDialogRef.close();
  }


  addEmployee() {
    this.details.addEmployee(this.form.value);
    this.matDialogRef.close();
  }


  editEmployee() {
    this.form.value.key = this.data.index;
    this.details.editEmployee(this.data.index, this.form.value);
    this.matDialogRef.close();
    this.location.back();
  }

}
