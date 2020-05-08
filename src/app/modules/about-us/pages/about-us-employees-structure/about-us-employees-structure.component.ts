import { Component, Inject, LOCALE_ID } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { AboutUsEmployeesStructureDialogComponent } from '../../components/about-us-employees-structure-dialog'

@Component({
  selector: 'about-us-employees-structure',
  templateUrl: './about-us-employees-structure.component.html',
  styleUrls: ['./about-us-employees-structure.component.scss'],
  providers: [MatDialog],
})
export class AboutUsEmployeesStructureComponent {
  title: string

  constructor(
    @Inject(LOCALE_ID) public localeId: string,
    public dialog: MatDialog
  ) {}

  openDialog(): void {
    this.dialog.open(AboutUsEmployeesStructureDialogComponent, {
      width: '550px',
    })
  }
}
