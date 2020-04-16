import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { ProgressBarService } from '@services/progress-bar-service'

@Component({
  selector: 'about-us-general',
  templateUrl: './about-us-general.component.html',
  styleUrls: ['./about-us-general.component.scss'],
})
export class AboutUsGeneralComponent implements OnInit {
  title: string
  content: string

  spinner = true

  constructor(
    @Inject(LOCALE_ID) public localeId: string,
    private db: AngularFirestore,
    private progressBarService: ProgressBarService
  ) {
    this.progressBarService.show(true)
  }
  ngOnInit(): void {
    this.db
      .collection('page_content')
      .doc('about_us')
      .collection('general')
      .doc(this.localeId)
      .valueChanges()
      .subscribe((data) => {
        const key = 'content'
        this.content = data[key]
        this.spinner = false
        this.progressBarService.show(false)
      })
  }
}
