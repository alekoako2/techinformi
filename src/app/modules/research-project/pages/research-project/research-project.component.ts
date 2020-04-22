import { Component, OnInit } from '@angular/core'

import { OecdService } from '@services/oecd-service'
import { Oecd } from '@graphql'
import { Observable } from 'rxjs'

@Component({
  selector: 'research-project',
  templateUrl: './research-project.component.html',
  styleUrls: ['./research-project.component.scss'],
})
export class ResearchProjectComponent implements OnInit {
  researchProjects$
  countResearchProjects$

  oecds$: Observable<Oecd[]>

  title: string
  researchExecutors: string
  keyword: string
  organizationName: string
  oecd: string

  constructor(private oecdService: OecdService) {}

  ngOnInit(): void {
    this.loadResearchProjects()

    this.oecds$ = this.oecdService.loadOecds()
  }

  loadResearchProjects(index = 0, limit = 12): void {
    const sum = index + limit
    console.log(sum)
    // this.store.dispatch(new LoadResearchProjects({
    //   query: {
    //     title: this.title,
    //     researchExecutors: this.researchExecutors,
    //     keyword: this.keyword,
    //     organizationName: this.organizationName,
    //     oecd: this.oecd,
    //   }, index, limit
    // }));
  }
}
