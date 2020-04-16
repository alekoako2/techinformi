import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// NPM Modules
import { FlexLayoutModule } from '@angular/flex-layout'

// Modules
import { HideNotImplementedDirective } from './modules/hide-not-implemented/hide-not-implemented'
import { LayoutContainerModule } from './modules/layout-container'
import { CustomInputsModule } from './modules/custom-inputs'
import { MaterialModule } from './modules/material'
import { FirebaseModule } from './modules/firebase'
import { SpinnerModule } from './modules/spinner'
import { DialogModule } from './modules/dialog'

// Components
import { PageTitleBarComponent } from './components/page-title-bar'

// Directives
import { HideMissingLanguageElementDirective } from './directives/hide-missing-language-element'
import { SnackbarDirective } from './directives/snackbar'

// Pipes
import { SanitizeHtmlPipe } from './pipes/sanitize-html'

@NgModule({
  declarations: [
    PageTitleBarComponent,
    SnackbarDirective,
    HideMissingLanguageElementDirective,
    SanitizeHtmlPipe,
    HideNotImplementedDirective,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    DialogModule,
    MaterialModule,
    SpinnerModule,
    LayoutContainerModule,
    SpinnerModule,
    FirebaseModule,
    CustomInputsModule,
  ],
  exports: [
    //Imports
    FlexLayoutModule,
    FlexLayoutModule,
    DialogModule,
    MaterialModule,
    SpinnerModule,
    LayoutContainerModule,
    SpinnerModule,
    FirebaseModule,
    CustomInputsModule,
    // Declarations
    PageTitleBarComponent,
    SnackbarDirective,
    HideMissingLanguageElementDirective,
    SanitizeHtmlPipe,
    HideNotImplementedDirective,
  ],
})
export class SharedModule {}
