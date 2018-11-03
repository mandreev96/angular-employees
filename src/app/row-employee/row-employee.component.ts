import {Component, Input, OnInit} from '@angular/core';
import {Employee} from "../employee";
import {DetailsService} from "../details.service";

@Component({
  selector: 'app-row-employee',
  templateUrl: './row-employee.component.html',
  styleUrls: ['./row-employee.component.css']
})
export class RowEmployeeComponent implements OnInit {

  @Input('data') employee: Employee;
  @Input('index') index: string;

  constructor(private details: DetailsService) { }

  ngOnInit() {

  }

  parseDate(date) {
    return this.details.parseDate(date)
  }


}
