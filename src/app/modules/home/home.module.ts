import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

// Modules
import { HomeRoutingModule } from './home-routing.module'
import { SharedModule } from '@shared'

// NPM Modules
import { SlickCarouselModule } from 'ngx-slick-carousel'
import { AngularFirestore } from '@angular/fire/firestore'

// Pages
import { HomeComponent } from './pages/home'

// Components
import { HomeVerticalNavListComponent } from './components/home-vertical-nav-list'
import { HomeSlickCarouselComponent } from './components/home-slick-carousel'
import { HomeNewsComponent } from './components/home-news';
import { PublicationsClassifiersComponent } from './pages/publications-classifiers/publications-classifiers.component'

@NgModule({
  declarations: [
    HomeVerticalNavListComponent,
    HomeSlickCarouselComponent,
    HomeNewsComponent,
    HomeComponent,
    PublicationsClassifiersComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SlickCarouselModule, SharedModule],
  providers: [AngularFirestore],
})
export class HomeModule {}
