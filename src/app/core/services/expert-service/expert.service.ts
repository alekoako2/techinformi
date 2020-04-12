import { Inject, Injectable, LOCALE_ID } from '@angular/core'
import { Apollo } from 'apollo-angular'
import { map } from 'rxjs/operators'
import { expertsQuery } from './gql/expert-query'
import { ExpertsQuery } from '../../../types/operation-result-types'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ExpertService {
  constructor(
    private apollo: Apollo,
    @Inject(LOCALE_ID) public localeId: string
  ) {}

  loadExperts(
    query = { fullName: '', oecd: '', specialization: '' },
    index = 0,
    limit = 12
  ): Observable<{}> {
    return this.apollo
      .watchQuery<ExpertsQuery>({
        variables: {
          languageCode: this.localeId.toUpperCase(),
          first: limit,
          skip: index * limit,
          query: { ...query },
        },
        query: expertsQuery,
      })
      .valueChanges.pipe(map((qrjsData) => qrjsData.data))
  }
}
