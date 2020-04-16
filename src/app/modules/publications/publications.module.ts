import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

// Modules
import { PublicationsRoutingModule } from './publications-routing.module'
import { SharedModule } from '@shared'

// Pages
import { PublicationsComponent } from './pages/publications'

@NgModule({
  declarations: [PublicationsComponent],
  imports: [CommonModule, SharedModule, PublicationsRoutingModule],
})
export class PublicationsModule {}
