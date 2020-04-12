import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ResearchProjectComponent } from './pages/research-project/research-project.component'

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
