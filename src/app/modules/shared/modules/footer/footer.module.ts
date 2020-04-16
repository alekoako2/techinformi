import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

// Modules
import { SharedModule } from '@shared'

// Components
import { FooterBackToTopComponent } from './components/footer-back-to-top'
import { FooterToolbarComponent } from './components/footer-toolbar'
import { FooterComponent } from './components/footer'

@NgModule({
  declarations: [
    FooterComponent,
    FooterToolbarComponent,
    FooterBackToTopComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [FooterComponent],
})
export class FooterModule {}
