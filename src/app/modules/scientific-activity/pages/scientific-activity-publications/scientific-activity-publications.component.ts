import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core'
import { ProgressBarService } from '@services/progress-bar-service'

@Component({
  selector: 'scientific-activity-publications',
  templateUrl: './scientific-activity-publications.component.html',
  styleUrls: ['./scientific-activity-publications.component.scss'],
})
export class ScientificActivityPublicationsComponent implements OnInit {
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
