import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { SharedModule } from '@shared'

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

@NgModule({
  declarations: [
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
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [
    HeaderSidenavListComponent,
    HeaderTopToolbarComponent,
    HeaderBottomToolbarComponent,
    HeaderComponent,
  ],
})
export class HeaderModule {}
