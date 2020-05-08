import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

// Modules
import { AboutUsRoutingModule } from './about-us-routing.module'

// Pages
import { AboutUsNormativeDocumentationComponent } from './pages/about-us-normative-documentation'
import { AboutUsEmployeesStructureComponent } from './pages/about-us-employees-structure'
import { AboutUsRegulationComponent } from './pages/about-us-regulation'
import { AboutUsEmployeesComponent } from './pages/about-us-employees/'
import { AboutUsGeneralComponent } from './pages/about-us-general'

// Components
import { AboutUsEmployeesStructureDialogComponent } from './components/about-us-employees-structure-dialog'
import { PageTitleBarModule } from '@shared/components/page-title-bar/page-title-bar.module'
import { LayoutContainerModule } from '@shared/components/layout-container'
import { SpinnerModule } from '@shared/components/spinner'
import { SanitizeHtmlModule } from '@shared/pipes/sanitize-html/sanitize-html.module'
import { MatDialogModule } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button'
import { HideMissingLanguageElementModule } from '@shared/directives/hide-missing-language-element/hide-missing-language-element.module'

@NgModule({
  declarations: [
    AboutUsEmployeesStructureDialogComponent,
    AboutUsNormativeDocumentationComponent,
    AboutUsEmployeesStructureComponent,
    AboutUsRegulationComponent,
    AboutUsEmployeesComponent,
    AboutUsGeneralComponent,
  ],
  exports: [],
  imports: [
    CommonModule,
    MatDialogModule,
    AboutUsRoutingModule,
    PageTitleBarModule,
    MatButtonModule,
    LayoutContainerModule,
    SpinnerModule,
    SanitizeHtmlModule,
    HideMissingLanguageElementModule,
  ],
})
export class AboutUsModule {}
