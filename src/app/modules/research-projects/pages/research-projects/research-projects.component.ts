import { Component, OnInit } from '@angular/core'

import { ProgressBarService } from '@services/progress-bar-service'
import { ResearchProjectsService } from '@services/research-projects-service'
import { ResearchProjectsQuery } from '@graphql'

@Component({
  selector: 'research-project',
  templateUrl: './research-projects.component.html',
  styleUrls: ['./research-projects.component.scss'],
})
export class ResearchProjectsComponent implements OnInit {
  data: ResearchProjectsQuery

  skeleton = true

  title: string
  leader_executors: string
  keywords: string
  principal_executing_organization: string
  oecd: string
  year_research_progress_start_or_end_year: Date
  from_year: Date
  to_year: Date

  pageIndex = 0
  pageSize = 10

  constructor(
    private researchProjectsService: ResearchProjectsService,
    private progressBarService: ProgressBarService
  ) {
    this.progressBarService.show(true)
  }

  ngOnInit(): void {
    this.loadResearchProjects()
  }

  loadResearchProjects(): void {
    this.skeleton = true
    this.researchProjectsService
      .loadResearchProjects(
        {
          title: this.title,
          leaderExecutors: this.leader_executors,
          keywords: this.keywords,
          principalExecutingOrganization: this.principal_executing_organization,
          oecd: this.oecd,
          yearResearchProgressStartOrEndYear: this
            .year_research_progress_start_or_end_year,
          fromYear: this.from_year,
          toYear: this.to_year,
        },
        this.pageIndex,
        this.pageSize
      )
      .subscribe((res: ResearchProjectsQuery) => {
        this.data = res
        this.skeleton = false
        this.progressBarService.show(false)
      })
  }

  loadPressed(event): void {
    this.pageIndex = event.pageIndex
    this.pageSize = event.pageSize
    this.loadResearchProjects()
  }

  searchPressed(): void {
    this.pageIndex = 0
    this.loadResearchProjects()
  }

  transformUrl(researchProject): string {
    return (
      researchProject.translation[0].title.split(' ').join('-') +
      '/' +
      researchProject.id
    )
  }
}
