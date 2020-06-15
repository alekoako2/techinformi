import { Component, OnInit } from '@angular/core'

import { ProgressBarService } from '@services/progress-bar-service'
import { ResearchProjectsService } from '@http/research-projects-service'
import { ResearchProjectsQuery } from '@graphql'
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'research-project',
  templateUrl: './research-projects.component.html',
  styleUrls: ['./research-projects.component.scss'],
})
export class ResearchProjectsComponent implements OnInit {
  data: ResearchProjectsQuery

  skeleton = true

  pageIndex = 0
  pageSize = 10

  researchProjectForm: FormGroup

  constructor(
    private researchProjectsService: ResearchProjectsService,
    private progressBarService: ProgressBarService,
    private fb: FormBuilder
  ) {
    this.progressBarService.show(true)
  }

  ngOnInit(): void {
    this.buildForm()
    this.loadResearchProjects()
  }

  buildForm = (): void => {
    this.researchProjectForm = this.fb.group({
      eTitle: [null],
      eAuthor: [null],
      eWords: [null],
      eOrganization: [null],
      eCodes: [null],
      fromYear: [null],
      toYear: [null],
    })
  }

  loadResearchProjects(): void {
    this.skeleton = true
    this.researchProjectsService
      .loadResearchProjects(
        {
          eTitle: this.researchProjectForm.get('eTitle').value,
          eAuthor: this.researchProjectForm.get('eAuthor').value,
          eWords: this.researchProjectForm.get('eWords').value,
          eOrganization: this.researchProjectForm.get('eOrganization').value,
          eCodes: this.researchProjectForm.get('eCodes').value,
          fromYear: this.researchProjectForm.get('fromYear').value,
          toYear: this.researchProjectForm.get('toYear').value,
        },
        this.pageIndex,
        this.pageSize
      )
      .subscribe(
        (res: ResearchProjectsQuery) => {
          this.data = res
          this.skeleton = false
          this.progressBarService.show(false)
        },
        () => {
          this.data = { countResearchProjects: 0 } as ResearchProjectsQuery
          this.skeleton = false
          this.progressBarService.show(false)
        }
      )
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
    return researchProject.title.split(' ').join('-') + '/' + researchProject.id
  }

  numbersRange = (startFrom: number, n: number): string[] =>
    [...Array(n).keys()].map((i) => (i + startFrom).toString())
}
