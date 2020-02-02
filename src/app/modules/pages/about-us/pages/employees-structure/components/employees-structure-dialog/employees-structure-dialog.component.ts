import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-employees-structure-dialog',
  templateUrl: './employees-structure-dialog.component.html',
  styleUrls: ['./employees-structure-dialog.component.scss']
})
export class EmployeesStructureDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data) {
  }

  ngOnInit() {
  }

}
