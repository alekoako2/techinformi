import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

// Components
import { HomeComponent } from './pages/home'

const homeRoutes: Routes = [
  {
    path: '',
    children: [{ path: '', component: HomeComponent }],
  },
]

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
