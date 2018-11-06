import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";
import {DetailsService} from "../details.service";
import {Employee} from "../employee";
import {Location} from "@angular/common";
import {AskDeleteComponent} from "../ask-delete/ask-delete.component";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @ViewChild('formTag') formTag;
  @ViewChild('form') form;
  @ViewChild('nameInput') nameInput;
  @ViewChild('surNameInput') surNameInput;
  @ViewChild('patronymicInput') patronymicInput;
  employee: Employee;
  defaultFirstName: string;
  defaultSurName: string;
  defaultPatronymic: string;
  defaultPosition: string;
  defaultDateOfBirth: string;
  defaultState: string;
  defaultComment: string = "";
  defaultImage: boolean;

  imageFile: File;

  alertMessageState: boolean = false;


  constructor(private matDialogRef: MatDialogRef<FormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private details: DetailsService,
              private location: Location,
              private dialog: MatDialog) {}

  ngOnInit() {
    this.setDefaultValues()
  }

  setDefaultValues() {
    if (this.data.edit === true) {
      this.defaultFirstName = this.data.employee.firstName;
      this.defaultSurName = this.data.employee.surName;
      this.defaultPatronymic = this.data.employee.patronymic;
      this.defaultPosition = this.data.employee.position;
      this.defaultState = this.data.employee.state;
      this.defaultDateOfBirth = this.data.employee.dateOfBirth;
      this.defaultComment = this.data.employee.comment;
      this.defaultImage = this.data.employee.image;
    }
  }

  closeForm() {
    this.matDialogRef.close();
  }

  viewAlertMessage() {
    if ((this.nameInput.invalid && (this.nameInput.touched||this.nameInput.dirty))
      ||(this.surNameInput.invalid && (this.surNameInput.touched || this.surNameInput.dirty))
      ||(this.patronymicInput.invalid && (this.patronymicInput.touched || this.patronymicInput.dirty)))
      this.alertMessageState = true;
    else
      this.alertMessageState = false;
  }


  addEmployee() {
    if (this.imageFile) this.form.value.image = true;
    else this.form.value.image = false;
    this.details.addEmployee(this.form.value, this.imageFile);
    this.matDialogRef.close();
  }

  selectedPicture(event: any) {
    this.imageFile = event.target.files[0];
  }


  editEmployee() {
    if (this.imageFile || this.data.employee.image) this.form.value.image = true;
    else this.form.value.image = false;
    this.details.editEmployee(this.data.index, this.form.value, this.imageFile);
    this.matDialogRef.close();
    this.location.back();
  }

  askDeleteImage() {
    this.dialog.open(AskDeleteComponent, {data: {userDelete: false, hasImage: true, index: this.data.index}})
  }

  updatePhoto() {
    this.defaultImage = false;
  }


}
