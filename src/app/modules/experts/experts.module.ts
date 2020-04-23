import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

// Modules
import { ExpertsRoutingModule } from './experts-routing.module'
import { DatabaseTemplateModule } from '../shared/modules/database-template'
import { SharedModule } from '@shared'

// Pages
import { ExpertDetailsComponent } from './pages/expert-details'
import { ExpertsComponent } from './pages/experts'

@NgModule({
  declarations: [ExpertsComponent, ExpertDetailsComponent],
  imports: [
    CommonModule,
    DatabaseTemplateModule,
    ExpertsRoutingModule,
    SharedModule,
  ],
})
export class ExpertsModule {}
