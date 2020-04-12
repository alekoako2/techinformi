import { Inject, Injectable, LOCALE_ID } from '@angular/core'
import { Apollo } from 'apollo-angular'
import { oecdsQuery } from './gql/oecd-query'
import { map } from 'rxjs/operators'
import { OecdsQuery } from '../../../types/operation-result-types'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class OecdService {
  constructor(
    private apollo: Apollo,
    @Inject(LOCALE_ID) public localeId: string
  ) {}

  loadOecds(searchText = '', index = 0, limit = 10): Observable<{}> {
    return this.apollo
      .watchQuery<OecdsQuery>({
        variables: {
          languageCode: this.localeId.toUpperCase(),
          first: limit,
          skip: index * limit,
          query: searchText,
        },
        query: oecdsQuery,
      })
      .valueChanges.pipe(map((oecdsData) => oecdsData.data))
  }
}
