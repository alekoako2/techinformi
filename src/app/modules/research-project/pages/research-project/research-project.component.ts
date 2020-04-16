import { Component, OnInit } from '@angular/core'

import { OecdService } from '@services/oecd-service'
import { OecdsQuery } from '@graphql'

@Component({
  selector: 'research-project',
  templateUrl: './research-project.component.html',
  styleUrls: ['./research-project.component.scss'],
})
export class ResearchProjectComponent implements OnInit {
  researchProjects$
  countResearchProjects$

  oecdList: OecdsQuery[]

  title: string
  researchExecutors: string
  keyword: string
  organizationName: string
  oecd: string

  constructor(private oecdService: OecdService) {}

  ngOnInit(): void {
    this.loadResearchProjects()

    this.oecdService.loadOecds('', 0, 999).subscribe((res: { oecds }) => {
      this.oecdList = res.oecds
    })
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
