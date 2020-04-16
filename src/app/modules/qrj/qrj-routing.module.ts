import { Routes, RouterModule } from '@angular/router'
import { QrjComponent } from './pages/qrj'
import { NgModule } from '@angular/core'

const routes: Routes = [
  {
    path: '',
    component: QrjComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrjRoutingModule {}
