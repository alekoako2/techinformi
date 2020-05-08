import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

// Modules
import { ServicesPageRoutingModule } from './services-page-routing.module'

// Pages
import { ServicesPageComponent } from './pages/services-page'
import { PageTitleBarModule } from '@shared/components/page-title-bar/page-title-bar.module'
import { LayoutContainerModule } from '@shared/components/layout-container'
import { SpinnerModule } from '@shared/components/spinner'
import { SanitizeHtmlModule } from '@shared/pipes/sanitize-html/sanitize-html.module'

@NgModule({
  declarations: [ServicesPageComponent],
  imports: [
    CommonModule,
    ServicesPageRoutingModule,
    PageTitleBarModule,
    LayoutContainerModule,
    SpinnerModule,
    SanitizeHtmlModule,
  ],
})
export class ServicesPageModule {}
