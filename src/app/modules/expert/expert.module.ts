import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'

// Modules
import { ExpertRoutingModule } from './expert-routing.module'
import { SharedModule } from '@shared'

// Pages
import { ExpertComponent } from './pages/expert'

@NgModule({
  declarations: [ExpertComponent],
  imports: [CommonModule, ExpertRoutingModule, SharedModule, FormsModule],
})
export class ExpertModule {}
