import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { ResearchProject } from '@graphql'

import { ActivatedRoute } from '@angular/router'
import { ResearchProjectsService } from '@services/research-projects-service'

@Component({
  selector: 'research-project-details',
  templateUrl: './research-project-details.component.html',
  styleUrls: ['./research-project-details.component.scss'],
})
export class ResearchProjectDetailsComponent {
  researchProject$: Observable<ResearchProject>

  constructor(
    private researchProjectsService: ResearchProjectsService,
    private route: ActivatedRoute
  ) {
    const id = this.route.snapshot.paramMap.get('id')
    this.researchProject$ = researchProjectsService.loadResearchProject(id)
  }
}
