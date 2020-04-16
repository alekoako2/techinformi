import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

// Pages
import { ScientificActivityPublicationsComponent } from './pages/scientific-activity-publications'
import { ScientificActivityDirectionsComponent } from './pages/scientific-activity-directions'
import { ScientificActivityProjectsComponent } from './pages/scientific-activity-projects'

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'publications',
        component: ScientificActivityPublicationsComponent,
      },
      {
        path: 'directions',
        component: ScientificActivityDirectionsComponent,
      },
      {
        path: 'projects',
        component: ScientificActivityProjectsComponent,
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScientificActivityRoutingModule {}
