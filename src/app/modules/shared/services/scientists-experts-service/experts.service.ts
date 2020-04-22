import { Inject, Injectable, LOCALE_ID } from '@angular/core'
import { Apollo } from 'apollo-angular'
import { first, map, tap } from 'rxjs/operators'
import { expertQuery, expertsQuery } from './gql/experts-query'
import {
  Expert,
  ExpertQuery,
  ExpertsQuery,
  QrjPublication,
  QrjPublicationQuery,
  Scalars,
} from '@graphql'
import { Observable } from 'rxjs'
import { ApolloQueryResult } from 'apollo-client'
import { qrjPublicationQuery } from '@services/qrj-publication-service/gql/qrj-publication-query'
import { LanguageService } from '@services/language-service'

@Injectable({
  providedIn: 'root',
})
export class ExpertsService {
  constructor(
    private apollo: Apollo,
    private languageService: LanguageService
  ) {}

  loadExperts(
    query = { fullName: '', oecd: '', specialization: '' },
    index = 0,
    limit = 12
  ): Observable<ExpertsQuery> {
    return this.apollo
      .watchQuery<ExpertsQuery>({
        variables: {
          languageCode: this.languageService.currentLanguage,
          first: limit,
          skip: index * limit,
          query: { ...query },
        },
        query: expertsQuery,
      })
      .valueChanges.pipe(
        map((expertsData: ApolloQueryResult<ExpertsQuery>) => expertsData.data)
      )
  }

  loadExpert(id: Scalars['ID']): Observable<Expert> {
    return this.apollo
      .watchQuery<ExpertQuery>({
        variables: {
          languageCode: this.languageService.currentLanguage,
          id,
        },
        query: expertQuery,
      })
      .valueChanges.pipe(
        map((res: ApolloQueryResult<ExpertQuery>) => res.data.expert)
      )
  }
}
