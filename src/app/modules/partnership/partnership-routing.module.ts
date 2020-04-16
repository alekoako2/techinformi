import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

// Pages
import { PartnershipComponent } from './pages/partnership'

const routes: Routes = [
  {
    path: '',
    component: PartnershipComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartnershipRoutingModule {}
