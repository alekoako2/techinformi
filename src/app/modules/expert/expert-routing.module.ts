import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ExpertComponent } from './pages/expert/expert.component'

const routes: Routes = [
  {
    path: '',
    component: ExpertComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpertRoutingModule {}
