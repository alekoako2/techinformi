import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

// Modules
import { QrjPublicationsRoutingModule } from './qrj-publications-routing.module'
import { DatabaseTemplateModule } from '../../shared/components/database-template'

// Pages
import { QrjPublicationDetailsComponent } from './pages/qrj-publication-details'
import { QrjPublicationsComponent } from './pages/qrj-publications'
import { PageTitleBarModule } from '@shared/components/page-title-bar/page-title-bar.module'
import { LayoutContainerModule } from '@shared/components/layout-container'
import { InputTextModule } from '@shared/components/custom-inputs/input-text'
import { OecdsSelectInputModule } from '@shared/components/oecds-select-input/oecds-select-input.module'
import { QrjJournalsSelectInputModule } from '@shared/components/qrj-journals-select-input/qrj-journals-select-input.module'
import { FlexLayoutModule } from '@angular/flex-layout'
import { SpinnerModule } from '@shared/components/spinner'

@NgModule({
  declarations: [QrjPublicationsComponent, QrjPublicationDetailsComponent],
  imports: [
    QrjPublicationsRoutingModule,
    DatabaseTemplateModule,
    CommonModule,
    PageTitleBarModule,
    LayoutContainerModule,
    InputTextModule,
    OecdsSelectInputModule,
    QrjJournalsSelectInputModule,
    FlexLayoutModule,
    SpinnerModule,
  ],
})
export class QrjPublicationsModule {}
