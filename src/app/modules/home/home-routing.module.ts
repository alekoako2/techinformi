import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'

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
