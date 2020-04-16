import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

// Modules
import { ServicesPageRoutingModule } from './services-page-routing.module'
import { SharedModule } from '@shared'

// Pages
import { ServicesPageComponent } from './pages/services-page'

@NgModule({
  declarations: [ServicesPageComponent],
  imports: [CommonModule, SharedModule, ServicesPageRoutingModule],
})
export class ServicesPageModule {}
