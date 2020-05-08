import { Component, Inject, LOCALE_ID } from '@angular/core'
import { QrjDialogComponent } from '../qrj-dialog'
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'description',
  templateUrl: './qrj-description.component.html',
  styleUrls: ['./qrj-description.component.scss'],
})
export class QrjDescriptionComponent {
  constructor(
    @Inject(LOCALE_ID) public localeId: string,
    public dialog: MatDialog
  ) {}

  openDialog(): void {
    this.dialog.open(QrjDialogComponent, {
      width: '550px',
    })
  }
}
