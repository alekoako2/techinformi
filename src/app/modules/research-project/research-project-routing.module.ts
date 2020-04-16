import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

// Pages
import { ResearchProjectComponent } from './pages/research-project'

const routes: Routes = [
  {
    path: '',
    component: ResearchProjectComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResearchProjectRoutingModule {}
