import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TechnologyTransferCentersRoutingModule } from './technology-transfer-centers-routing.module'
import { TechnologyTransferCentersComponent } from './technology-transfer-centers/technology-transfer-centers.component'
import { PageTitleBarModule } from '@shared/components/page-title-bar/page-title-bar.module'
import { LayoutContainerModule } from '@shared/components/layout-container'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [TechnologyTransferCentersComponent],
  imports: [
    CommonModule,
    TechnologyTransferCentersRoutingModule,
    PageTitleBarModule,
    LayoutContainerModule,
    FlexLayoutModule,
    MatButtonModule,
  ],
})
export class TechnologyTransferCentersModule {}
