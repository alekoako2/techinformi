import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

// Components
import { FooterBackToTopComponent } from './components/footer-back-to-top'
import { FooterToolbarComponent } from './components/footer-toolbar'
import { FooterComponent } from './components/footer'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { HideMissingLanguageElementModule } from '@shared/directives/hide-missing-language-element/hide-missing-language-element.module'

@NgModule({
  declarations: [
    FooterComponent,
    FooterToolbarComponent,
    FooterBackToTopComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule,
    HideMissingLanguageElementModule,
  ],
  exports: [FooterComponent],
})
export class FooterModule {}
