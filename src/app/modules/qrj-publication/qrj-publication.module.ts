import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { QrjPublicationRoutingModule } from './qrj-publication-routing.module'
import { QrjPublicationComponent } from './pages/qrj-publication/qrj-publication.component'
import { SharedModule } from '../../shared/modules/shared/shared.module'
import { CustomInputsModule } from '../../shared/modules/custom-inputs/custom-inputs.module'
import { FormsModule } from '@angular/forms'
import { PageTitleBarModule } from '../../shared/modules/page-title-bar/page-title-bar.module'
import { QrjPublicationDetailsComponent } from './pages/qrj-publication-details/qrj-publication-details.component'

@NgModule({
  declarations: [QrjPublicationComponent, QrjPublicationDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    QrjPublicationRoutingModule,
    CustomInputsModule,
    FormsModule,
    PageTitleBarModule,
  ],
})
export class QrjPublicationModule {}
