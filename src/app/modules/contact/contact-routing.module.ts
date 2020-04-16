import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

// Pages
import { ContactComponent } from './pages/contact'

const contactRoutes: Routes = [
  {
    path: '',
    children: [{ path: '', component: ContactComponent }],
  },
  // {path: '**', component: NotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forChild(contactRoutes)],
  exports: [RouterModule],
})
export class ContactRoutingModule {}
