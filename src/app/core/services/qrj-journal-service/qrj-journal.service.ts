import { Inject, Injectable, LOCALE_ID } from '@angular/core'
import { Apollo } from 'apollo-angular'
import { map } from 'rxjs/operators'
import { qrjJournalsQuery } from './gql/journalQuery'
import { QrjJournalsQuery } from '../../../types/operation-result-types'

@Injectable({
  providedIn: 'root',
})
export class QrjJournalService {
  constructor(
    private apollo: Apollo,
    @Inject(LOCALE_ID) public localeId: string
  ) {}

  loadQrjJournals(searchText = '', index = 0, limit = 10) {
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
      .valueChanges.pipe(map((qrjJournalsData) => qrjJournalsData.data))
  }
}
