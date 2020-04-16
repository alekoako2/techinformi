import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'

// Modules
import { ScientistsExpertsRoutingModule } from './scientists-experts-routing.module'
import { SharedModule } from '@shared'

// Pages
import { ScientistsExpertsComponent } from './pages/scientists-experts'

@NgModule({
  declarations: [ScientistsExpertsComponent],
  imports: [
    CommonModule,
    ScientistsExpertsRoutingModule,
    SharedModule,
    FormsModule,
  ],
})
export class ScientistsExpertsModule {}
