import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

// Modules
import { QrjPublicationsRoutingModule } from './qrj-publications-routing.module'
import { DatabaseTemplateModule } from '../shared/modules/database-template'
import { SharedModule } from '@shared'

// Pages
import { QrjPublicationDetailsComponent } from './pages/qrj-publication-details'
import { QrjPublicationsComponent } from './pages/qrj-publications'

@NgModule({
  declarations: [QrjPublicationsComponent, QrjPublicationDetailsComponent],
  imports: [
    QrjPublicationsRoutingModule,
    DatabaseTemplateModule,
    CommonModule,
    SharedModule,
  ],
})
export class QrjPublicationsModule {}
