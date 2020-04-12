import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderSidenavListComponent } from './components/header-sidenav-list/header-sidenav-list.component'
import { HeaderTopToolbarComponent } from './components/header-top-toolbar/header-top-toolbar.component'
import { HeaderBottomToolbarComponent } from './components/header-bottom-toolbar/header-bottom-toolbar.component'
import { HeaderTopToolbarLogoComponent } from './components/header-top-toolbar-logo/header-top-toolbar-logo.component'
import { HeaderTopToolbarSearchComponent } from './components/header-top-toolbar-search/header-top-toolbar-search.component'
import { HeaderTopToolbarUserToolsComponent } from './components/header-top-toolbar-user-tools/header-top-toolbar-user-tools.component'
import { RouterModule } from '@angular/router'
import { HeaderTopToolbarResponsiveSearchComponent } from './components/header-top-toolbar-responsive-search/header-top-toolbar-responsive-search.component'
import { HeaderTopToolbarUserToolsLanguageComponent } from './components/header-top-toolbar-user-tools-language/header-top-toolbar-user-tools-language.component'
import { HideNotImplementedModule } from '../../shared/modules/hide-not-implemented/hide-not-implemented.module'
import { HideMissingLanguageElementModule } from '../../shared/modules/hide-missing-language-element/hide-missing-language-element.module'
import { SharedModule } from '../../shared/modules/shared/shared.module'

@NgModule({
  declarations: [
    HeaderSidenavListComponent,
    HeaderTopToolbarComponent,
    HeaderBottomToolbarComponent,
    HeaderTopToolbarLogoComponent,
    HeaderTopToolbarSearchComponent,
    HeaderTopToolbarUserToolsComponent,
    HeaderTopToolbarResponsiveSearchComponent,
    HeaderTopToolbarUserToolsLanguageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HideNotImplementedModule,
    HideMissingLanguageElementModule,
  ],
  exports: [
    HeaderSidenavListComponent,
    HeaderTopToolbarComponent,
    HeaderBottomToolbarComponent,
  ],
})
export class HeaderModule {}
