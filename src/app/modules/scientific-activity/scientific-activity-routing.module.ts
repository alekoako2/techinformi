import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ScientificActivityDirectionsComponent } from './pages/scientific-activity-directions/scientific-activity-directions.component'
import { ScientificActivityProjectsComponent } from './pages/scientific-activity-projects/scientific-activity-projects.component'
import { ScientificActivityPublicationsComponent } from './pages/scientific-activity-publications/scientific-activity-publications.component'

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'scientific-activity-directions',
        component: ScientificActivityDirectionsComponent,
      },
      {
        path: 'scientific-activity-projects',
        component: ScientificActivityProjectsComponent,
      },
      {
        path: 'publications',
        component: ScientificActivityPublicationsComponent,
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScientificActivityRoutingModule {}
