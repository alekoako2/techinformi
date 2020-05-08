import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

// Modules
import { PublicationsRoutingModule } from './publications-routing.module'

// Pages
import { PublicationsComponent } from './pages/publications'
import { PageTitleBarModule } from '@shared/components/page-title-bar/page-title-bar.module'
import { MatCardModule } from '@angular/material/card'
import { LayoutContainerModule } from '@shared/components/layout-container'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatDividerModule } from '@angular/material/divider'

@NgModule({
  declarations: [PublicationsComponent],
  imports: [
    CommonModule,
    PublicationsRoutingModule,
    PageTitleBarModule,
    MatCardModule,
    LayoutContainerModule,
    FlexLayoutModule,
    MatDividerModule,
  ],
})
export class PublicationsModule {}
