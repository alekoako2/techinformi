import { Component, Inject, OnInit } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Observable } from 'rxjs'

@Component({
  selector: 'partnership-dialog',
  templateUrl: './partnership-dialog.component.html',
  styleUrls: ['./partnership-dialog.component.scss'],
})
export class PartnershipDialogComponent implements OnInit {
  showSpinner = true

  list

  constructor(@Inject(MAT_DIALOG_DATA) public data) {}

  ngOnInit(): void {
    this.showSpinner = false
  }
}
