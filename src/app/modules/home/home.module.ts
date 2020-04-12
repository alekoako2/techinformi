import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HomeComponent } from './pages/home/home.component'

import { HomeRoutingModule } from './home-routing.module'
import { SlickCarouselModule } from 'ngx-slick-carousel'
import { FlexModule } from '@angular/flex-layout'
import { HomeSlickCarouselComponent } from './components/home-slick-carousel/home-slick-carousel.component'
import { SnackbarDirective } from '../../shared/directives/snackbar.directive'
import { HomeNewsComponent } from './components/home-news/home-news.component'
import { HomeVerticalNavListComponent } from './components/home-vertical-nav-list/home-vertical-nav-list.component'
import { AngularFirestore } from '@angular/fire/firestore'
import { SharedModule } from '../../shared/modules/shared/shared.module'
import { SanitizeHtmlModule } from '../../shared/modules/sanitize-html/sanitize-html.module'

@NgModule({
  declarations: [
    HomeComponent,
    HomeSlickCarouselComponent,
    SnackbarDirective,
    HomeNewsComponent,
    HomeVerticalNavListComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SlickCarouselModule,
    SharedModule,
    FlexModule,
    SanitizeHtmlModule,
  ],
  providers: [AngularFirestore],
})
export class HomeModule {}
