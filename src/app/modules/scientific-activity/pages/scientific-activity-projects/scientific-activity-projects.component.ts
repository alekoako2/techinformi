import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core'
import { ProgressBarService } from '@services/progress-bar-service'

@Component({
  selector: 'scientific-activity-projects',
  templateUrl: './scientific-activity-projects.component.html',
  styleUrls: ['./scientific-activity-projects.component.scss'],
})
export class ScientificActivityProjectsComponent implements OnInit {
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
