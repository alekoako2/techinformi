import { Component, Inject } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'employees-structure-dialog',
  templateUrl: './employees-structure-dialog.component.html',
  styleUrls: ['./employees-structure-dialog.component.scss'],
})
export class EmployeesStructureDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data) {}
}
