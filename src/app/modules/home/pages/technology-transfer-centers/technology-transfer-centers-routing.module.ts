import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { TechnologyTransferCentersComponent } from './technology-transfer-centers/technology-transfer-centers.component'

const routes: Routes = [
  {
    path: '',
    component: TechnologyTransferCentersComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechnologyTransferCentersRoutingModule {}
