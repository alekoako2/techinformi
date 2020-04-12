import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ContactComponent } from './pages/contact/contact.component'

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
