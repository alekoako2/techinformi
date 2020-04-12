import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'

@Component({
  selector: 'scientific-activity-projects',
  templateUrl: './scientific-activity-projects.component.html',
  styleUrls: ['./scientific-activity-projects.component.scss'],
})
export class ScientificActivityProjectsComponent implements OnInit {
  content: string

  constructor(
    @Inject(LOCALE_ID) public localeId: string,
    private db: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.db
      .collection('page_content')
      .doc('scientific_activity')
      .collection('scientific-activity-projects')
      .doc(this.localeId)
      .valueChanges()
      .subscribe((data: { content }) => {
        this.content = data.content
      })
  }
}
