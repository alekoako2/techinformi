import { Component } from '@angular/core'
import { PageEvent } from '@angular/material/paginator'

@Component({
  selector: 'home-news',
  templateUrl: './home-news.component.html',
  styleUrls: ['./home-news.component.scss'],
})
export class HomeNewsComponent {
  pageEvent: PageEvent
}
