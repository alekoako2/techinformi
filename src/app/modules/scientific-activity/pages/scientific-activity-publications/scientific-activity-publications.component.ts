import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'

@Component({
  selector: 'scientific-activity-publications',
  templateUrl: './scientific-activity-publications.component.html',
  styleUrls: ['./scientific-activity-publications.component.scss'],
})
export class ScientificActivityPublicationsComponent implements OnInit {
  content: string

  constructor(
    @Inject(LOCALE_ID) public localeId: string,
    private db: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.db
      .collection('page_content')
      .doc('scientific_activity')
      .collection('publications')
      .doc(this.localeId)
      .valueChanges()
      .subscribe((data: { content }) => {
        this.content = data.content
      })
  }
}
