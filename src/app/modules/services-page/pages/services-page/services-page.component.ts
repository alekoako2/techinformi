import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core'
import { ProgressBarService } from '@services/progress-bar-service'

@Component({
  selector: 'services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss'],
})
export class ServicesPageComponent implements OnInit {
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
