import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

// NPM Modules
import { SlickCarouselModule } from 'ngx-slick-carousel'

// Modules
import { ScientificActivityRoutingModule } from './scientific-activity-routing.module'
import { SharedModule } from '@shared'

// Pages
import { ScientificActivityPublicationsComponent } from './pages/scientific-activity-publications'
import { ScientificActivityDirectionsComponent } from './pages/scientific-activity-directions'
import { ScientificActivityProjectsComponent } from './pages/scientific-activity-projects'

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
    SharedModule,
  ],
})
export class ScientificActivityModule {}
