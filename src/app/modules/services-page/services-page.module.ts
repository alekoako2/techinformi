import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ServicesPageRoutingModule } from './services-page-routing.module'
import { ServicesComponent } from './pages/services-page/services.component'
import { PageTitleBarModule } from '../../shared/modules/page-title-bar/page-title-bar.module'
import { SharedModule } from '../../shared/modules/shared/shared.module'
import { SanitizeHtmlModule } from '../../shared/modules/sanitize-html/sanitize-html.module'

@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    SharedModule,
    ServicesPageRoutingModule,
    PageTitleBarModule,
    SanitizeHtmlModule,
  ],
})
export class ServicesPageModule {}
