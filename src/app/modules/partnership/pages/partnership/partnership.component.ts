import { Component, Inject, LOCALE_ID } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { PartnershipDialogComponent } from '../../components/partnership-dialog/partnership-dialog.component'

@Component({
  selector: 'partnership',
  templateUrl: './partnership.component.html',
  styleUrls: ['./partnership.component.scss'],
})
export class PartnershipComponent {
  data: {}

  constructor(
    @Inject(LOCALE_ID) public localeId: string,
    public dialog: MatDialog
  ) {}

  openDialog(collectionName): void {
    this.dialog.open(PartnershipDialogComponent, {
      width: '550px',
      data: { title: collectionName },
    })
  }
}
