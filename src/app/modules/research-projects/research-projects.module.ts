import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

// Modules
import { ResearchProjectsRoutingModule } from './research-projects-routing.module'
import { DatabaseTemplateModule } from '../../shared/components/database-template'

// Pages
import { ResearchProjectsComponent } from './pages/research-projects'
import { ResearchProjectDetailsComponent } from './pages/research-project-details'
import { PageTitleBarModule } from '@shared/components/page-title-bar/page-title-bar.module'
import { LayoutContainerModule } from '@shared/components/layout-container'
import { InputTextModule } from '@shared/components/custom-inputs/input-text'
import { InputYearPickerModule } from '@shared/components/custom-inputs/input-year-picker'
import { FlexLayoutModule } from '@angular/flex-layout'
import { OecdsSelectInputModule } from '@shared/components/oecds-select-input/oecds-select-input.module'
import { NotEmptyModule } from '@shared/pipes/not-empty'
import { MatTooltipModule } from '@angular/material/tooltip'
import { OecdsInputDisplayValueFilterAutocompleteModule } from '@shared/components/oecds-input-display-value-filter-autocomplete'
import { InputSelectModule } from '@shared/components/custom-inputs/input-select'

@NgModule({
  declarations: [ResearchProjectsComponent, ResearchProjectDetailsComponent],
  imports: [
    CommonModule,
    ResearchProjectsRoutingModule,
    DatabaseTemplateModule,
    PageTitleBarModule,
    LayoutContainerModule,
    InputTextModule,
    InputYearPickerModule,
    FlexLayoutModule,
    OecdsSelectInputModule,
    NotEmptyModule,
    MatTooltipModule,
    OecdsInputDisplayValueFilterAutocompleteModule,
    InputSelectModule,
  ],
})
export class ResearchProjectsModule {}
