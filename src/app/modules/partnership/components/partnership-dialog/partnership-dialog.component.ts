import { Component, Inject, OnInit } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs'

@Component({
  selector: 'partnership-dialog',
  templateUrl: './partnership-dialog.component.html',
  styleUrls: ['./partnership-dialog.component.scss'],
})
export class PartnershipDialogComponent implements OnInit {
  showSpinner = true

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private db: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.loadLists(this.data.title).subscribe((data) => {
      this.showSpinner = false
      this.data.list = data
    })
  }

  loadLists(collection): Observable<{}> {
    return this.db
      .collection('page_content')
      .doc('partnership')
      .collection(collection)
      .valueChanges()
  }
}
