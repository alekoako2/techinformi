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
import { QrjJournalsSelectInputComponent } from './components/qrj-journals-select-input'
import { OecdsSelectInputComponent } from './components/oecds-select-input'
import { PageTitleBarComponent } from './components/page-title-bar'

// Directives
import { HideMissingLanguageElementDirective } from './directives/hide-missing-language-element'
import { SnackbarDirective } from './directives/snackbar'

// Pipes
import { SanitizeHtmlPipe } from './pipes/sanitize-html'
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader'
import { ScrollingModule } from '@angular/cdk/scrolling'

@NgModule({
  declarations: [
    // Components
    QrjJournalsSelectInputComponent,
    OecdsSelectInputComponent,
    PageTitleBarComponent,
    // Directives
    HideMissingLanguageElementDirective,
    HideNotImplementedDirective,
    SnackbarDirective,
    // Pipes
    SanitizeHtmlPipe,
  ],
  imports: [
    CommonModule,
    NgxSkeletonLoaderModule,
    LayoutContainerModule,
    CustomInputsModule,
    FlexLayoutModule,
    ScrollingModule,
    MaterialModule,
    FirebaseModule,
    SpinnerModule,
    SpinnerModule,
    DialogModule,
  ],
  exports: [
    //Modules
    NgxSkeletonLoaderModule,
    LayoutContainerModule,
    CustomInputsModule,
    FlexLayoutModule,
    FlexLayoutModule,
    ScrollingModule,
    MaterialModule,
    FirebaseModule,
    SpinnerModule,
    SpinnerModule,
    DialogModule,
    // Components
    QrjJournalsSelectInputComponent,
    OecdsSelectInputComponent,
    PageTitleBarComponent,
    // Directives
    HideMissingLanguageElementDirective,
    HideNotImplementedDirective,
    SnackbarDirective,
    // Pipes
    SanitizeHtmlPipe,
  ],
})
export class SharedModule {}
