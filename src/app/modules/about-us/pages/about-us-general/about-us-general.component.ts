import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core'
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
    private progressBarService: ProgressBarService
  ) {
    this.progressBarService.show(true)
  }
  ngOnInit(): void {}
}
