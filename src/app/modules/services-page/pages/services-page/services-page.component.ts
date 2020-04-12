import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'

@Component({
  selector: 'services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss'],
})
export class ServicesPageComponent implements OnInit {
  content: string

  constructor(
    @Inject(LOCALE_ID) public localeId: string,
    private db: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.db
      .collection('page_content')
      .doc('services')
      .valueChanges()
      .subscribe((data) => {
        const key = 'content'
        this.content = data[key]
      })
  }
}
