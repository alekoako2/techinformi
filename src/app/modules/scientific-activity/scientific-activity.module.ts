import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ScientificActivityRoutingModule } from './scientific-activity-routing.module'
import { ScientificActivityDirectionsComponent } from './pages/scientific-activity-directions/scientific-activity-directions.component'
import { ScientificActivityProjectsComponent } from './pages/scientific-activity-projects/scientific-activity-projects.component'
import { ScientificActivityPublicationsComponent } from './pages/scientific-activity-publications/scientific-activity-publications.component'
import { SlickCarouselModule } from 'ngx-slick-carousel'
import { PageTitleBarModule } from '../../shared/modules/page-title-bar/page-title-bar.module'
import { SharedModule } from '../../shared/modules/shared/shared.module'
import { SanitizeHtmlModule } from '../../shared/modules/sanitize-html/sanitize-html.module'

@NgModule({
  declarations: [
    ScientificActivityDirectionsComponent,
    ScientificActivityProjectsComponent,
    ScientificActivityPublicationsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ScientificActivityRoutingModule,
    SlickCarouselModule,
    PageTitleBarModule,
    SanitizeHtmlModule,
  ],
})
export class ScientificActivityModule {}
