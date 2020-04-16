import { Component, OnInit } from '@angular/core'
import { Select, Store } from '@ngxs/store'
import { Observable } from 'rxjs'

import { OecdService } from '../../../shared/services/oecd-service/oecd.service'
import {
  OecdsQuery_oecds,
  ResearchProjectsQuery_researchProjects,
} from '../../../shared/models/generated/types/operation-result-types'

@Component({
  selector: 'research-project',
  templateUrl: './research-project.component.html',
  styleUrls: ['./research-project.component.scss'],
})
export class ResearchProjectComponent implements OnInit {
  @Select((state) => state.researchProject.researchProjects)
  researchProjects$: Observable<ResearchProjectsQuery_researchProjects[]>
  @Select((state) => state.researchProject.count)
  countResearchProjects$: Observable<number>

  oecdList: OecdsQuery_oecds[]

  title: string
  researchExecutors: string
  keyword: string
  organizationName: string
  oecd: string

  constructor(private store: Store, private oecdService: OecdService) {}

  ngOnInit(): void {
    this.loadResearchProjects()

    this.oecdService.loadOecds('', 0, 999).subscribe((res: { oecds }) => {
      this.oecdList = res.oecds
    })
  }

  loadResearchProjects(index = 0, limit = 12): void {
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
