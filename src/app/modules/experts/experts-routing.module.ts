import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

// Pages
import { ExpertsComponent } from './pages/experts/experts.component'
import { ExpertsDetailsComponent } from './pages/experts-details/experts-details.component'

const routes: Routes = [
  {
    path: '',
    component: ExpertsComponent,
    data: { shouldReuse: true, key: 'expertsRoot' },
  },
  {
    path: ':title/:id',
    component: ExpertsDetailsComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpertsRoutingModule {}
