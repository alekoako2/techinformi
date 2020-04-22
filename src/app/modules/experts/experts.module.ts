import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

// Modules
import { ExpertsRoutingModule } from './experts-routing.module'
import { DatabaseTemplateModule } from '../shared/modules/database-template'
import { SharedModule } from '@shared'

// Pages
import { ExpertsDetailsComponent } from './pages/experts-details/experts-details.component'
import { ExpertsComponent } from './pages/experts/experts.component'

@NgModule({
  declarations: [ExpertsComponent, ExpertsDetailsComponent],
  imports: [
    CommonModule,
    ExpertsRoutingModule,
    DatabaseTemplateModule,
    CommonModule,
    SharedModule,
  ],
})
export class ExpertsModule {}
