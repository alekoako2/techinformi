import { Component, OnInit } from '@angular/core'

import { ExpertsQuery } from '@graphql'
import { ProgressBarService } from '@services/progress-bar-service'
import { ExpertsService } from '@services/scientists-experts-service/experts.service'

@Component({
  selector: 'experts',
  templateUrl: './experts.component.html',
  styleUrls: ['./experts.component.scss'],
})
export class ExpertsComponent implements OnInit {
  data: ExpertsQuery

  skeleton = true

  author = ''
  oecd: string
  specialization: string

  pageIndex = 0
  pageSize = 10

  constructor(
    private expertsService: ExpertsService,
    private progressBarService: ProgressBarService
  ) {
    this.progressBarService.show(true)
  }

  ngOnInit(): void {
    this.loadExperts()
  }

  loadExperts(): void {
    this.skeleton = true
    this.expertsService
      .loadExperts(
        {
          fullName: this.author,
          oecd: this.oecd,
          specialization: this.specialization,
        },
        this.pageIndex,
        this.pageSize
      )
      .subscribe((res: ExpertsQuery) => {
        this.data = res
        this.skeleton = false
        this.progressBarService.show(false)
      })
  }

  loadPressed(event): void {
    this.pageIndex = event.pageIndex
    this.pageSize = event.pageSize
    this.loadExperts()
  }

  searchPressed(): void {
    this.pageIndex = 0
    this.loadExperts()
  }

  transformUrl(expert): string {
    return expert.translation[0].fullName.split(' ').join('-') + '/' + expert.id
  }
}
