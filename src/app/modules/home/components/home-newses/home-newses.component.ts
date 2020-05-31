import { Component, Input } from '@angular/core'
import { PageEvent } from '@angular/material/paginator'
import { NewsService } from '@http/news-service'
import { News, NewsesQuery, QrjPublicationsQuery } from '@graphql'
import { first } from 'rxjs/operators'

@Component({
  selector: 'home-news',
  templateUrl: './home-newses.component.html',
  styleUrls: ['./home-newses.component.scss'],
})
export class HomeNewsesComponent {
  newses: News[]
  countNewses: number

  pageIndex = 0
  pageSize = 4

  constructor(private newsService: NewsService) {
    this.loadNewses()
  }

  loadNewses(): void {
    this.newsService
      .loadNewses(null, this.pageIndex, this.pageSize)
      .pipe(first())
      .subscribe((newsesQuery: NewsesQuery) => {
        this.newses = newsesQuery.newses
        this.countNewses = newsesQuery.countNewses
      })
  }

  loadPressed(event): void {
    this.pageIndex = event.pageIndex
    this.pageSize = event.pageSize
    this.loadNewses()
  }

  transformUrl(news: News): string {
    return news.translation[0].title?.split(' ').join('-') + '/' + news.id
  }
}
