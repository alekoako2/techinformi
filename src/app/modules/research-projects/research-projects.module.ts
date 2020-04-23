import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

// Modules
import { ResearchProjectsRoutingModule } from './research-projects-routing.module'
import { DatabaseTemplateModule } from '../shared/modules/database-template'
import { SharedModule } from '@shared'

// Pages
import { ResearchProjectsComponent } from './pages/research-projects'
import { ResearchProjectDetailsComponent } from './pages/research-project-details'

@NgModule({
  declarations: [ResearchProjectsComponent, ResearchProjectDetailsComponent],
  imports: [
    CommonModule,
    ResearchProjectsRoutingModule,
    DatabaseTemplateModule,
    SharedModule,
  ],
})
export class ResearchProjectsModule {}
