import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

// Pages
import { QrjPublicationComponent } from './pages/qrj-publication'

const routes: Routes = [
  {
    path: '',
    component: QrjPublicationComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrjPublicationRoutingModule {}
