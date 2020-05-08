import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

// Modules
import { ContactRoutingModule } from './contact-routing.module'

// Pages
import { ContactComponent } from './pages/contact'

// Components
import { ContactInfoComponent } from './components/contact-info'
import { ContactFormComponent } from './components/contact-form'
import { ContactMapComponent } from './components/contact-map'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button'
import { FlexLayoutModule } from '@angular/flex-layout'
import { PageTitleBarModule } from '@shared/components/page-title-bar/page-title-bar.module'

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
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FlexLayoutModule,
    PageTitleBarModule,
  ],
})
export class ContactModule {}
