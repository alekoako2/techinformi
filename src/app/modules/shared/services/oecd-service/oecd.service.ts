import { Injectable } from '@angular/core'
import { Apollo } from 'apollo-angular'
import { oecdsQuery } from './gql/oecd-query'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { Oecd, OecdsQuery } from '@graphql'
import { ApolloQueryResult } from 'apollo-client'
import { LanguageService } from '@services/language-service'

@Injectable({
  providedIn: 'root',
})
export class OecdService {
  constructor(
    private apollo: Apollo,
    private languageService: LanguageService
  ) {}

  loadOecds(
    searchText = '',
    index?: number,
    limit?: number
  ): Observable<Oecd[]> {
    return this.apollo
      .watchQuery<OecdsQuery>({
        variables: {
          languageCode: this.languageService.currentLanguage,
          first: limit,
          skip: index * limit,
          query: searchText,
        },
        query: oecdsQuery,
      })
      .valueChanges.pipe(
        map((res: ApolloQueryResult<OecdsQuery>) => res.data.oecds)
      )
  }
}
