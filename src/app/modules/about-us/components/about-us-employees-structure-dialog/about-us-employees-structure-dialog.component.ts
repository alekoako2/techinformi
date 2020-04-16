import { Component, Inject } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'about-us-employees-structure-dialog',
  templateUrl: './about-us-employees-structure-dialog.component.html',
  styleUrls: ['./about-us-employees-structure-dialog.component.scss'],
})
export class AboutUsEmployeesStructureDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data) {}
}
