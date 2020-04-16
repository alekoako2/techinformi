import { Inject, Injectable, LOCALE_ID } from '@angular/core'
import { Apollo } from 'apollo-angular'
import { map } from 'rxjs/operators'
import { qrjPublicationsQuery } from './gql/qrj-publication-query'
import { Observable } from 'rxjs'
import { QrjPublicationsQuery } from '@graphql'

@Injectable({
  providedIn: 'root',
})
export class QrjPublicationService {
  constructor(
    private apollo: Apollo,
    @Inject(LOCALE_ID) public localeId: string
  ) {}

  loadQrjPublications(
    query = { author: '', title: '', oecd: '', qrjJournal: '' },
    index = 0,
    limit = 10
  ): Observable<QrjPublicationsQuery> {
    return this.apollo
      .watchQuery<QrjPublicationsQuery>({
        variables: {
          languageCode: this.localeId.toUpperCase(),
          first: limit,
          skip: index * limit,
          query: { ...query },
        },
        query: qrjPublicationsQuery,
      })
      .valueChanges.pipe(map((qrjsData) => qrjsData.data))
  }
}
