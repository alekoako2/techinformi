import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

// Pages
import { DatabasesComponent } from './pages/databases'
import { QrjPublicationsModule } from '../qrj-publications'
import { ExpertsModule } from '../experts'
import { ResearchProjectsModule } from '../research-projects'

const routes: Routes = [
  {
    path: 'experts',
    loadChildren: (): Promise<ExpertsModule> =>
      import('../experts').then(
        (mod: { ExpertsModule: ExpertsModule }) => mod.ExpertsModule
      ),
  },
  {
    path: 'research-projects',
    loadChildren: (): Promise<ResearchProjectsModule> =>
      import('../research-projects/research-projects.module').then(
        (mod: { ResearchProjectsModule: ResearchProjectsModule }) =>
          mod.ResearchProjectsModule
      ),
  },
  {
    path: 'qrj-publications',
    loadChildren: (): Promise<QrjPublicationsModule> =>
      import('../qrj-publications').then(
        (mod: { QrjPublicationsModule: QrjPublicationsModule }) =>
          mod.QrjPublicationsModule
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
