import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core'
import { ProgressBarService } from '@services/progress-bar-service'

@Component({
  selector: 'scientific-directions',
  templateUrl: './scientific-activity-directions.component.html',
  styleUrls: ['./scientific-activity-directions.component.scss'],
})
export class ScientificActivityDirectionsComponent implements OnInit {
  slides: object

  spinner = true

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
    private progressBarService: ProgressBarService
  ) {
    this.progressBarService.show(true)
  }

  ngOnInit(): void {}
}
