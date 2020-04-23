import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

// Pages
import { ResearchProjectDetailsComponent } from './pages/research-project-details'
import { ResearchProjectsComponent } from './pages/research-projects'

const routes: Routes = [
  {
    path: '',
    component: ResearchProjectsComponent,
    data: { shouldReuse: true, key: 'researchProjectRoot' },
  },
  {
    path: ':title/:id',
    component: ResearchProjectDetailsComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResearchProjectsRoutingModule {}
