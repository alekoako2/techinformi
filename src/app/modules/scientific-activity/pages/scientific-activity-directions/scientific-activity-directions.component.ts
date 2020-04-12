import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'

@Component({
  selector: 'scientific-directions',
  templateUrl: './scientific-activity-directions.component.html',
  styleUrls: ['./scientific-activity-directions.component.scss'],
})
export class ScientificActivityDirectionsComponent implements OnInit {
  showSpinner = true
  slides: object

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: true,
    speed: 1000,
    autoplay: true,
  }

  constructor(
    @Inject(LOCALE_ID) public localeId: string,
    private db: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.db
      .collection('page_content')
      .doc('scientific_activity')
      .collection('scientific_directions')
      .doc(this.localeId)
      .collection('slides')
      .valueChanges()
      .subscribe((data) => {
        this.showSpinner = false

        this.slides = data
      })
  }
}
