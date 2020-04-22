import { Inject, Injectable, LOCALE_ID } from '@angular/core'
import { Apollo } from 'apollo-angular'
import { map } from 'rxjs/operators'
import { qrjJournalsQuery } from './gql/journal-query'
import { Observable } from 'rxjs'
import { QrjJournal, QrjJournalsQuery } from '@graphql'
import { ApolloQueryResult } from 'apollo-client'

@Injectable({
  providedIn: 'root',
})
export class QrjJournalService {
  constructor(
    private apollo: Apollo,
    @Inject(LOCALE_ID) public localeId: string
  ) {}

  loadQrjJournals(
    searchText = '',
    index?: number,
    limit?: number
  ): Observable<QrjJournal[]> {
    return this.apollo
      .watchQuery<QrjJournalsQuery>({
        variables: {
          languageCode: this.localeId.toUpperCase(),
          first: limit,
          skip: index * limit,
          query: searchText,
        },
        query: qrjJournalsQuery,
      })
      .valueChanges.pipe(
        map(
          (qrjJournalsData: ApolloQueryResult<QrjJournalsQuery>) =>
            qrjJournalsData.data.qrjJournals
        )
      )
  }
}
