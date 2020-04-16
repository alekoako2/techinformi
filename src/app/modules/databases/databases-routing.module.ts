import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

// Pages
import { DatabasesComponent } from './pages/databases'
import { QrjPublicationModule } from '../qrj-publication'
import { ScientistsExpertsModule } from '../scientists-experts'
import { ResearchProjectModule } from '../research-project'

const routes: Routes = [
  {
    path: 'scientists-experts',
    loadChildren: (): Promise<ScientistsExpertsModule> =>
      import('../../modules/scientists-experts').then(
        (mod) => mod.ScientistsExpertsModule
      ),
  },
  {
    path: 'research-project',
    loadChildren: (): Promise<ResearchProjectModule> =>
      import('../../modules/research-project').then(
        (mod) => mod.ResearchProjectModule
      ),
  },
  {
    path: 'qrj-publication',
    loadChildren: (): Promise<QrjPublicationModule> =>
      import('../../modules/qrj-publication').then(
        (mod) => mod.QrjPublicationModule
      ),
  },
  {
    path: '',
    component: DatabasesComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatabasesRoutingModule {}
