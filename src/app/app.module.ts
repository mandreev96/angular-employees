import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewerComponent } from './viewer/viewer.component';
import { InfoComponent } from './info/info.component';
import { FormComponent } from './form/form.component';
import { RowEmployeeComponent } from './row-employee/row-employee.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {MatButtonModule, MatCheckboxModule, MatDialogModule} from "@angular/material";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {FlexLayoutModule} from "@angular/flex-layout";
import { AskDeleteComponent } from './ask-delete/ask-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewerComponent,
    InfoComponent,
    RowEmployeeComponent,
    FormComponent,
    AskDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [FormComponent, AskDeleteComponent]
})
export class AppModule { }
