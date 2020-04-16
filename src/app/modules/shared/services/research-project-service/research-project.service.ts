import { Inject, Injectable, LOCALE_ID } from '@angular/core'
import { Apollo } from 'apollo-angular'
import { map } from 'rxjs/operators'
import { researchProjectsQuery } from './gql/research-project-query'
import { Observable } from 'rxjs'
import { ResearchProjectsQuery } from '@graphql'

@Injectable({
  providedIn: 'root',
})
export class ResearchProjectService {
  constructor(
    private apollo: Apollo,
    @Inject(LOCALE_ID) public localeId: string
  ) {}

  loadResearchProjects(
    query = {
      title: '',
      researchExecutors: '',
      keyword: '',
      organizationName: '',
      oecd: '',
    },
    index = 0,
    limit = 12
  ): Observable<{}> {
    return this.apollo
      .watchQuery<ResearchProjectsQuery>({
        variables: {
          languageCode: this.localeId.toUpperCase(),
          first: limit,
          skip: index * limit,
          query: { ...query },
        },
        query: researchProjectsQuery,
      })
      .valueChanges.pipe(map((qrjsData) => qrjsData.data))
  }
}
