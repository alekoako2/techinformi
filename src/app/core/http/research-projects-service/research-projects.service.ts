import { Injectable } from '@angular/core'
import { Apollo } from 'apollo-angular'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs'
import {
  ResearchProject,
  ResearchProjectQuery,
  ResearchProjectQueryInput,
  ResearchProjectsQuery,
  Scalars,
} from '@graphql'
import { LanguageService } from '@services/language-service'

import { ApolloQueryResult } from 'apollo-client'
import {
  researchProjectQuery,
  // researchProjectQuery,
  researchProjectsQuery,
} from './gql/research-projects-query'

@Injectable({
  providedIn: 'root',
})
export class ResearchProjectsService {
  constructor(
    private apollo: Apollo,
    private languageService: LanguageService
  ) {}

  loadResearchProjects(
    query: ResearchProjectQueryInput,
    index = 0,
    limit = 12
  ): Observable<ResearchProjectsQuery> {
    return this.apollo
      .watchQuery<ResearchProjectsQuery>({
        variables: {
          languageCode: this.languageService.currentLanguage,
          first: limit,
          skip: index,
          query: { ...query },
        },
        query: researchProjectsQuery,
      })
      .valueChanges.pipe(
        map(
          (researchProjectsData: ApolloQueryResult<ResearchProjectsQuery>) =>
            researchProjectsData.data
        )
      )
  }

  loadResearchProject(id: string): Observable<ResearchProject> {
    return this.apollo
      .watchQuery<ResearchProjectQuery>({
        variables: {
          languageCode: this.languageService.currentLanguage,
          id,
        },
        query: researchProjectQuery,
      })
      .valueChanges.pipe(
        map(
          (res: ApolloQueryResult<ResearchProjectQuery>) =>
            res.data.researchProject
        )
      )
  }
}
