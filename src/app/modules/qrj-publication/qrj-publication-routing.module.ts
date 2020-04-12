import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { QrjPublicationComponent } from './pages/qrj-publication/qrj-publication.component'

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
