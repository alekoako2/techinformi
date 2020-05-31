import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

// Custom Modules
import { HomeRoutingModule } from './home-routing.module'

// Library Modules
import { SlickCarouselModule } from 'ngx-slick-carousel'
import { AngularFirestore } from '@angular/fire/firestore'
import { FlexLayoutModule } from '@angular/flex-layout'

// Material Modules
import { MatDividerModule } from '@angular/material/divider'

// Pages
import { HomeComponent } from './pages/home'

// Components
import { HomeVerticalNavListComponent } from './components/home-vertical-nav-list'
import { HomeSlickCarouselComponent } from './components/home-slick-carousel'
import { HomeNewsesComponent } from './components/home-newses/home-newses.component'
import { PublicationsClassifiersComponent } from './pages/publications-classifiers'
import { MatPaginatorModule } from '@angular/material/paginator'
import { PageTitleBarModule } from '@shared/components/page-title-bar/page-title-bar.module'
import { LayoutContainerModule } from '@shared/components/layout-container'
import { SpinnerModule } from '@shared/components/spinner'
import { SanitizeHtmlModule } from '@shared/pipes/sanitize-html/sanitize-html.module'
import { MatButtonModule } from '@angular/material/button'
import { HideNotImplementedModule } from '@shared/directives/hide-not-implemented'
import { MatCardModule } from '@angular/material/card'
import { HomeNewsDetailsComponent } from './pages/home-news-details/home-news-details.component'

@NgModule({
  declarations: [
    HomeVerticalNavListComponent,
    HomeSlickCarouselComponent,
    HomeNewsesComponent,
    HomeComponent,
    PublicationsClassifiersComponent,
    HomeNewsDetailsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SlickCarouselModule,
    FlexLayoutModule,
    MatDividerModule,
    MatPaginatorModule,
    PageTitleBarModule,
    LayoutContainerModule,
    SpinnerModule,
    SanitizeHtmlModule,
    MatButtonModule,
    HideNotImplementedModule,
    MatCardModule,
  ],
  providers: [AngularFirestore],
})
export class HomeModule {}
