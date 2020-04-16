import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'

// Modules
import { QrjPublicationRoutingModule } from './qrj-publication-routing.module'
import { SharedModule } from '@shared'

// Pages
import { QrjPublicationDetailsComponent } from './pages/qrj-publication-details'
import { QrjPublicationComponent } from './pages/qrj-publication'

@NgModule({
  declarations: [QrjPublicationComponent, QrjPublicationDetailsComponent],
  imports: [
    QrjPublicationRoutingModule,
    CommonModule,
    SharedModule,
    FormsModule,
  ],
})
export class QrjPublicationModule {}
