import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core'
import { Oecd } from '../../../../shared/models/Oecd'

@Component({
  selector: 'qrj-dialog',
  templateUrl: './qrj-dialog.component.html',
  styleUrls: ['./qrj-dialog.component.scss'],
})
export class QrjDialogComponent implements OnInit {
  showSpinner = true

  oecds: Oecd[] = [] as Oecd[]
  searchOecd: string

  constructor(@Inject(LOCALE_ID) public localeId: string) {}

  ngOnInit(): void {}
}
