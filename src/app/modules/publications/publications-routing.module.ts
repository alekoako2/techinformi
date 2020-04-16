import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

// Pages
import { PublicationsComponent } from './pages/publications'

const routes: Routes = [
  {
    path: '',
    component: PublicationsComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicationsRoutingModule {}
