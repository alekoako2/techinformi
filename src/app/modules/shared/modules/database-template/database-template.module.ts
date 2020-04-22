import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

// Modules
import { SharedModule } from '@shared'

// Components
import { DatabaseTemplatePaginatorComponent } from './components/database-template-paginator'
import { DatabaseTemplateFiltersComponent } from './components/database-template-filters'
import { DatabaseTemplateDetailsComponent } from './components/database-template-details'
import { DatabaseTemplateListComponent } from './components/database-template-list'
import { DatabaseTemplateComponent } from './components/database-template'
import { DatabaseTemplateListItemComponent } from './components/database-template-list-item'

@NgModule({
  declarations: [
    DatabaseTemplatePaginatorComponent,
    DatabaseTemplateListItemComponent,
    DatabaseTemplateFiltersComponent,
    DatabaseTemplateDetailsComponent,
    DatabaseTemplateListComponent,
    DatabaseTemplateComponent,
  ],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [
    DatabaseTemplateComponent,
    DatabaseTemplateListItemComponent,
    DatabaseTemplateDetailsComponent,
  ],
})
export class DatabaseTemplateModule {}
