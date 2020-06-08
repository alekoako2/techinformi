import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

// Modules
import { ExpertsRoutingModule } from './experts-routing.module'
import { DatabaseTemplateModule } from '../../shared/components/database-template'

// Pages
import { ExpertDetailsComponent } from './pages/expert-details'
import { ExpertsComponent } from './pages/experts'
import { PageTitleBarModule } from '@shared/components/page-title-bar/page-title-bar.module'
import { InputTextModule } from '@shared/components/custom-inputs/input-text'
import { OecdsSelectInputModule } from '@shared/components/oecds-select-input/oecds-select-input.module'
import { FlexLayoutModule } from '@angular/flex-layout'
import { LayoutContainerModule } from '@shared/components/layout-container'
import { SanitizeHtmlModule } from '@shared/pipes/sanitize-html/sanitize-html.module'
import { OecdsInputDisplayValueFilterAutocompleteModule } from '@shared/components/oecds-input-display-value-filter-autocomplete'

@NgModule({
  declarations: [ExpertsComponent, ExpertDetailsComponent],
  imports: [
    CommonModule,
    DatabaseTemplateModule,
    ExpertsRoutingModule,
    PageTitleBarModule,
    InputTextModule,
    OecdsSelectInputModule,
    FlexLayoutModule,
    LayoutContainerModule,
    SanitizeHtmlModule,
    OecdsInputDisplayValueFilterAutocompleteModule,
  ],
})
export class ExpertsModule {}
