import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

// Pages
import { QrjPublicationsComponent } from './pages/qrj-publications'
import { QrjPublicationDetailsComponent } from './pages/qrj-publication-details'

const routes: Routes = [
  {
    path: '',
    component: QrjPublicationsComponent,
    data: { shouldReuse: true, key: 'qrjPublicationRoot' },
  },
  {
    path: ':title/:id',
    component: QrjPublicationDetailsComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrjPublicationsRoutingModule {}
