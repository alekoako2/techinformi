import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { Slide } from '@models/Slide'

// Services
import { ProgressBarService } from '@services/progress-bar-service'

@Component({
  selector: 'home-slick-carousel',
  templateUrl: './home-slick-carousel.component.html',
  styleUrls: ['./home-slick-carousel.component.scss'],
})
export class HomeSlickCarouselComponent implements OnInit {
  showSpinner = true
  slides: Slide[] = []

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    centerMode: true,
    arrows: false,
    centerPadding: window.innerWidth < 1280 ? 0 : 15 + '%',
    speed: 1000,
    autoplay: true,
  }

  constructor(
    @Inject(LOCALE_ID) public localeId: string,
    private db: AngularFirestore,
    private progressBarService: ProgressBarService
  ) {
    this.progressBarService.show(true)
  }

  ngOnInit(): void {
    this.db
      .collection('slides')
      .snapshotChanges()
      .subscribe((slides) => {
        slides.map((slide) => {
          const slideKey = slide.payload.doc.id
          this.db
            .collection('slides_translation')
            .doc(this.localeId)
            .collection('slides')
            .doc(slideKey)
            .valueChanges()
            .subscribe((translatedData) => {
              this.showSpinner = false
              this.progressBarService.show(false)
              const newSlide: Slide = slide.payload.doc.data() as Slide
              newSlide.translatedData = translatedData
              this.slides.push(newSlide)
            })
        })
      })
  }
}
