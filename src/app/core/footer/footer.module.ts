import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FooterComponent } from './components/footer/footer.component'
import { FooterToolbarComponent } from './components/footer-toolbar/footer-toolbar.component'
import { FooterBackToTopComponent } from './components/footer-back-to-top/footer-back-to-top.component'

@NgModule({
  declarations: [
    FooterComponent,
    FooterToolbarComponent,
    FooterBackToTopComponent,
  ],
  imports: [CommonModule],
  exports: [FooterComponent],
})
export class FooterModule {}
