import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

// Modules
import { ContactRoutingModule } from './contact-routing.module'
import { SharedModule } from '@shared'

// Pages
import { ContactComponent } from './pages/contact'

// Components
import { ContactInfoComponent } from './components/contact-info'
import { ContactFormComponent } from './components/contact-form'
import { ContactMapComponent } from './components/contact-map'

@NgModule({
  declarations: [
    ContactInfoComponent,
    ContactFormComponent,
    ContactMapComponent,
    ContactComponent,
  ],
  imports: [
    ContactRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    FormsModule,
  ],
})
export class ContactModule {}
