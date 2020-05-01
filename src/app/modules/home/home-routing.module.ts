import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

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
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
