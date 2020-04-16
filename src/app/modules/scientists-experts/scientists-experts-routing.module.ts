import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

// Pages
import { ScientistsExpertsComponent } from './pages/scientists-experts/scientists-experts.component'

const routes: Routes = [
  {
    path: '',
    component: ScientistsExpertsComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScientistsExpertsRoutingModule {}
