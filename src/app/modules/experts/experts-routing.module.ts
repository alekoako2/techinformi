import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

// Pages
import { ExpertsComponent } from './pages/experts'
import { ExpertDetailsComponent } from './pages/expert-details'

const routes: Routes = [
  {
    path: '',
    component: ExpertsComponent,
    data: { shouldReuse: true, key: 'expertsRoot' },
  },
  {
    path: ':title/:id',
    component: ExpertDetailsComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpertsRoutingModule {}
