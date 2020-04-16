import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

// Modules
import { PartnershipRoutingModule } from './partnership-routing.module'
import { SharedModule } from '@shared'

// Pages
import { PartnershipComponent } from './pages/partnership'

// Components
import { PartnershipDialogComponent } from './components/partnership-dialog'

@NgModule({
  declarations: [PartnershipComponent, PartnershipDialogComponent],
  imports: [CommonModule, SharedModule, PartnershipRoutingModule],
  entryComponents: [PartnershipDialogComponent],
})
export class PartnershipModule {}
