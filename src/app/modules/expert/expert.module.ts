import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ExpertRoutingModule } from './expert-routing.module'
import { ExpertComponent } from './pages/expert/expert.component'
import { CustomInputsModule } from '../../shared/modules/custom-inputs/custom-inputs.module'
import { SharedModule } from '../../shared/modules/shared/shared.module'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [ExpertComponent],
  imports: [
    CommonModule,
    ExpertRoutingModule,
    SharedModule,
    CustomInputsModule,
    FormsModule,
  ],
})
export class ExpertModule {}
