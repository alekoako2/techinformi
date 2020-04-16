import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

// Modules
import { ResearchProjectRoutingModule } from './research-project-routing.module'
import { SharedModule } from '@shared'

// Pages
import { ResearchProjectComponent } from './pages/research-project'

@NgModule({
  declarations: [ResearchProjectComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ResearchProjectRoutingModule,
  ],
})
export class ResearchProjectModule {}
