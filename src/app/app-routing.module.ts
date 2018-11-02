import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewerComponent} from "./viewer/viewer.component";
import {InfoComponent} from "./info/info.component";

const routes: Routes = [
  {path: '', component: ViewerComponent},
  {path: 'info/:id', component: InfoComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
