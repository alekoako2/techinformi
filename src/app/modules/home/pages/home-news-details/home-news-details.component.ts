import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { News } from '@graphql'
import { ActivatedRoute } from '@angular/router'
import { NewsService } from '@http/news-service'

@Component({
  selector: 'app-home-news-details',
  templateUrl: './home-news-details.component.html',
  styleUrls: ['./home-news-details.component.scss'],
})
export class HomeNewsDetailsComponent {
  news$: Observable<News>

  constructor(private newsService: NewsService, private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id')
    this.news$ = newsService.loadNews(id)
  }
}
