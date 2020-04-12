import { Component, Inject, LOCALE_ID } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { EmployeesStructureDialogComponent } from './components/employees-structure-dialog/employees-structure-dialog.component'

@Component({
  selector: 'employees-structure',
  templateUrl: './employees-structure.component.html',
  styleUrls: ['./employees-structure.component.scss'],
})
export class EmployeesStructureComponent {
  title: string

  constructor(
    @Inject(LOCALE_ID) public localeId: string,
    public dialog: MatDialog
  ) {}

  openDialog(): void {
    this.dialog.open(EmployeesStructureDialogComponent, {
      width: '550px',
    })
  }
}
