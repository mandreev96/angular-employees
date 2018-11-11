import {Component, Inject, OnInit} from '@angular/core';
import {DetailsService} from "../details.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Location} from "@angular/common";

@Component({
  selector: 'app-ask-delete',
  templateUrl: './ask-delete.component.html',
  styleUrls: ['./ask-delete.component.css']
})
export class AskDeleteComponent implements OnInit {

  constructor(private details: DetailsService,
              private matDialogRef: MatDialogRef<AskDeleteComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private location: Location) { }

  ngOnInit() {
    console.log(this.data.userDelete)
  }

  delete() {
    this.details.delEmployee(this.data.index, this.data.hasImage);
    this.matDialogRef.close();
    this.location.back();
  }

  deleteImage() {
    this.details.deleteImage(this.data.index);
    this.matDialogRef.close({closePopup: true, deleteImage: true});
  }

  cancel() {
    this.matDialogRef.close()
  }
}
