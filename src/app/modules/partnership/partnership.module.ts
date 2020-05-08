import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

// Modules
import { PartnershipRoutingModule } from './partnership-routing.module'
import { DialogModule } from '@shared/components/dialog'

// Pages
import { PartnershipComponent } from './pages/partnership'

// Components
import { PartnershipDialogComponent } from './components/partnership-dialog'
import { PageTitleBarModule } from '@shared/components/page-title-bar/page-title-bar.module'
import { LayoutContainerModule } from '@shared/components/layout-container'
import { MatButtonModule } from '@angular/material/button'
import { SanitizeHtmlModule } from '@shared/pipes/sanitize-html/sanitize-html.module'
import { SpinnerModule } from '@shared/components/spinner'

@NgModule({
  declarations: [PartnershipComponent, PartnershipDialogComponent],
  imports: [
    CommonModule,
    PartnershipRoutingModule,
    PageTitleBarModule,
    LayoutContainerModule,
    DialogModule,
    MatButtonModule,
    SanitizeHtmlModule,
    SpinnerModule,
  ],
  entryComponents: [PartnershipDialogComponent],
})
export class PartnershipModule {}
