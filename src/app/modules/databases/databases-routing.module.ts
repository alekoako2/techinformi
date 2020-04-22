import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

// Pages
import { DatabasesComponent } from './pages/databases'
import { QrjPublicationsModule } from '../qrj-publications'
import { ExpertsModule } from '../experts/experts.module'
import { ResearchProjectModule } from '../research-project'

const routes: Routes = [
  {
    path: 'experts',
    loadChildren: (): Promise<ExpertsModule> =>
      import('../experts/experts.module').then((mod) => mod.ExpertsModule),
  },
  {
    path: 'research-project',
    loadChildren: (): Promise<ResearchProjectModule> =>
      import('../../modules/research-project').then(
        (mod) => mod.ResearchProjectModule
      ),
  },
  {
    path: 'qrj-publications',
    loadChildren: (): Promise<QrjPublicationsModule> =>
      import('../qrj-publications/qrj-publications.module').then(
        (mod) => mod.QrjPublicationsModule
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
