// Native Modules
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

// Library Modules
import { FlexLayoutModule } from '@angular/flex-layout'

// Material Modules
import { MatExpansionModule } from '@angular/material/expansion'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatDividerModule } from '@angular/material/divider'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatMenuModule } from '@angular/material/menu'
import { MatIconModule } from '@angular/material/icon'

// Custom Modules
import { HideMissingLanguageElementModule } from '@shared/directives/hide-missing-language-element/hide-missing-language-element.module'
import { LayoutContainerModule } from '@shared/components/layout-container'

// Components
import { HeaderTopToolbarResponsiveSearchComponent } from './components/header-top-toolbar-responsive-search'
import { HeaderTopToolbarUserToolsLanguageComponent } from './components/header-top-toolbar-user-tools-language'
import { HeaderTopToolbarUserToolsComponent } from './components/header-top-toolbar-user-tools'
import { HeaderTopToolbarSearchComponent } from './components/header-top-toolbar-search'
import { HeaderTopToolbarLogoComponent } from './components/header-top-toolbar-logo'
import { HeaderBottomToolbarComponent } from './components/header-bottom-toolbar'
import { HeaderSidenavListComponent } from './components/header-sidenav-list'
import { HeaderTopToolbarComponent } from './components/header-top-toolbar'
import { HeaderComponent } from './components/header'
import { HideNotImplementedModule } from '@shared/directives/hide-not-implemented'

@NgModule({
  declarations: [
    // Components
    HeaderTopToolbarUserToolsLanguageComponent,
    HeaderTopToolbarResponsiveSearchComponent,
    HeaderTopToolbarUserToolsComponent,
    HeaderTopToolbarSearchComponent,
    HeaderTopToolbarLogoComponent,
    HeaderBottomToolbarComponent,
    HeaderSidenavListComponent,
    HeaderTopToolbarComponent,
    HeaderComponent,
  ],
  imports: [
    // Native Modules
    CommonModule,
    RouterModule,
    // Library Modules
    FlexLayoutModule,
    // Material Modules
    MatExpansionModule,
    MatFormFieldModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    // Custom Modules
    HideMissingLanguageElementModule,
    HideNotImplementedModule,
    LayoutContainerModule,
  ],
  exports: [
    // Components
    HeaderBottomToolbarComponent,
    HeaderSidenavListComponent,
    HeaderTopToolbarComponent,
    HeaderComponent,
  ],
})
export class HeaderModule {}
