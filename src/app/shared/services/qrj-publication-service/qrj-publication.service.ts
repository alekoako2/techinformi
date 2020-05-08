import { Injectable } from '@angular/core'
import { Apollo } from 'apollo-angular'
import { map, tap } from 'rxjs/operators'
import {
  qrjPublicationQuery,
  qrjPublicationsQuery,
} from './gql/qrj-publication-query'
import { Observable } from 'rxjs'
import {
  QrjPublication,
  QrjPublicationQuery,
  QrjPublicationQueryInput,
  QrjPublicationsQuery,
  QrjPublicationsQueryVariables,
  Scalars,
} from '@graphql'
import { ApolloQueryResult } from 'apollo-client'
import { LanguageService } from '../language-service'

@Injectable({
  providedIn: 'root',
})
export class QrjPublicationService {
  constructor(
    private apollo: Apollo,
    private languageService: LanguageService
  ) {}

  loadQrjPublications(
    query: QrjPublicationQueryInput,
    index = 0,
    limit = 10
  ): Observable<QrjPublicationsQuery> {
    return this.apollo
      .watchQuery<QrjPublicationsQuery, QrjPublicationsQueryVariables>({
        variables: {
          languageCode: this.languageService.currentLanguage,
          first: limit,
          skip: index * limit,
          query,
        },
        query: qrjPublicationsQuery,
      })
      .valueChanges.pipe(
        map((res: ApolloQueryResult<QrjPublicationsQuery>) => res.data)
      )
  }

  loadQrjPublication(id: Scalars['ID']): Observable<QrjPublication> {
    return this.apollo
      .watchQuery<QrjPublicationQuery>({
        variables: {
          languageCode: this.languageService.currentLanguage,
          id,
        },
        query: qrjPublicationQuery,
      })
      .valueChanges.pipe(
        map(
          (res: ApolloQueryResult<QrjPublicationQuery>) =>
            res.data.qrjPublication
        )
      )
  }
}
