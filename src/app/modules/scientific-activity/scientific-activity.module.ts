import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

// Library Modules
import { SlickCarouselModule } from 'ngx-slick-carousel'

// Modules
import { ScientificActivityRoutingModule } from './scientific-activity-routing.module'

// Pages
import { ScientificActivityPublicationsComponent } from './pages/scientific-activity-publications'
import { ScientificActivityDirectionsComponent } from './pages/scientific-activity-directions'
import { ScientificActivityProjectsComponent } from './pages/scientific-activity-projects'
import { PageTitleBarModule } from '@shared/components/page-title-bar/page-title-bar.module'
import { LayoutContainerModule } from '@shared/components/layout-container'
import { SpinnerModule } from '@shared/components/spinner'
import { SanitizeHtmlModule } from '@shared/pipes/sanitize-html/sanitize-html.module'

@NgModule({
  declarations: [
    ScientificActivityPublicationsComponent,
    ScientificActivityDirectionsComponent,
    ScientificActivityProjectsComponent,
  ],
  imports: [
    ScientificActivityRoutingModule,
    SlickCarouselModule,
    CommonModule,
    PageTitleBarModule,
    LayoutContainerModule,
    SpinnerModule,
    SanitizeHtmlModule,
  ],
})
export class ScientificActivityModule {}
