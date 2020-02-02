import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {EmployeesStructureDialogComponent} from './components/employees-structure-dialog/employees-structure-dialog.component';

@Component({
  selector: 'app-employees-structure',
  templateUrl: './employees-structure.component.html',
  styleUrls: ['./employees-structure.component.scss']
})
export class EmployeesStructureComponent implements OnInit {
  title: string;

  constructor(@Inject(LOCALE_ID) public localeId: string, public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openDialog(depName): void {

    this.dialog.open(EmployeesStructureDialogComponent, {
      width: '550px',
      // data: {title: collectionName}
    });


  }

}
