import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {DetailsService} from "../details.service";
import {Employee} from "../employee";
import {Location} from "@angular/common";

import * as firebase from 'firebase'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @ViewChild('formTag') formTag;
  @ViewChild('form') form;
  employee: Employee;
  defaultFirstName: string;
  defaultSurName: string;
  defaultPatronymic: string;
  defaultPosition: string;
  defaultDateOfBirth: string;
  defaultState: string;
  defaultComment: string = "";


  constructor(private matDialogRef: MatDialogRef<FormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private details: DetailsService,
              private location: Location) {}

  ngOnInit() {
    this.setDefaultValues()
  }

  setDefaultValues() {
    if (this.data.edit === true) {
      this.defaultFirstName = this.data.employee.firstName;
      this.defaultSurName = this.data.employee.surName;
      this.defaultPatronymic = this.data.employee.patronymic;
      this.defaultPosition = this.data.employee.position;
      this.defaultState = this.data.employee.state ? 'Работает' : 'Уволен';
      this.defaultDateOfBirth = this.data.employee.dateOfBirth;
      this.defaultComment = this.data.employee.comment;
    }
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



  selectedPicture(event: any) {
    const file: File = event.target.files[0];
    const storageRef: firebase.storage.Reference = firebase.storage().ref().child(`/photos/${file.name}`);
    console.log(storageRef);
  }

}
