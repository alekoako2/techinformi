import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

// Modules
import { TechnologyTransferCentersModule } from './pages/technology-transfer-centers'

// Components
import { HomeComponent } from './pages/home'
import { PublicationsClassifiersComponent } from './pages/publications-classifiers'

const homeRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'publications-classifiers',
        component: PublicationsClassifiersComponent,
      },
      {
        path: 'technology-transfer-centers',
        loadChildren: (): Promise<TechnologyTransferCentersModule> =>
          import('./pages/technology-transfer-centers').then(
            (mod) => mod.TechnologyTransferCentersModule
          ),
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
