import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ResearchProjectRoutingModule } from './research-project-routing.module'
import { ResearchProjectComponent } from './pages/research-project/research-project.component'
import { SharedModule } from '../../shared/modules/shared/shared.module'
import { CustomInputsModule } from '../../shared/modules/custom-inputs/custom-inputs.module'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [ResearchProjectComponent],
  imports: [
    CommonModule,
    SharedModule,
    CustomInputsModule,
    FormsModule,
    ResearchProjectRoutingModule,
  ],
})
export class ResearchProjectModule {}
