import { Injectable } from '@angular/core'
import { Apollo } from 'apollo-angular'
import { map, tap } from 'rxjs/operators'
import { newsesQuery, newsQuery } from './gql/news.queries'
import { Observable } from 'rxjs'
import {
  News,
  NewsQuery,
  NewsQueryInput,
  NewsesQuery,
  NewsesQueryVariables,
  Scalars,
  NewsQueryVariables,
} from '@graphql'
import { ApolloQueryResult } from 'apollo-client'
import { LanguageService } from '@services/language-service'

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(
    private apollo: Apollo,
    private languageService: LanguageService
  ) {}

  loadNewses(
    query?: NewsQueryInput,
    pageIndex = 0,
    pageSize = 10
  ): Observable<NewsesQuery> {
    return this.apollo
      .watchQuery<NewsesQuery, NewsesQueryVariables>({
        variables: {
          languageCode: this.languageService.currentLanguage,
          first: pageSize,
          skip: pageIndex * pageSize,
          query,
          orderBy: 'updatedAt_DESC',
        },
        query: newsesQuery,
      })
      .valueChanges.pipe(map((res: ApolloQueryResult<NewsesQuery>) => res.data))
  }

  loadNews(id: Scalars['ID']): Observable<News> {
    return this.apollo
      .watchQuery<NewsQuery, NewsQueryVariables>({
        variables: {
          languageCode: this.languageService.currentLanguage,
          id,
        },
        query: newsQuery,
      })
      .valueChanges.pipe(
        map((res: ApolloQueryResult<NewsQuery>) => res.data.news)
      )
  }
}
