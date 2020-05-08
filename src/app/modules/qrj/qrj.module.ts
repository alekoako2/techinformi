import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'

// Modules
import { QrjRoutingModule } from './qrj-routing.module'

// Pages
import { QrjComponent } from './pages/qrj'

// Components
import { QrjDescriptionComponent } from './components/qrj-description'
import { FilterOecdPipe } from './components/qrj-dialog/pipes'
import { QrjDialogComponent } from './components/qrj-dialog'
import { LayoutContainerModule } from '@shared/components/layout-container'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatDialogModule } from '@angular/material/dialog'
import { SpinnerModule } from '@shared/components/spinner'
import { MatDividerModule } from '@angular/material/divider'
import { PageTitleBarModule } from '@shared/components/page-title-bar/page-title-bar.module'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatInputModule } from '@angular/material/input'

@NgModule({
  declarations: [
    QrjDescriptionComponent,
    QrjDialogComponent,
    FilterOecdPipe,
    FilterOecdPipe,
    QrjComponent,
  ],
  imports: [
    CommonModule,
    QrjRoutingModule,
    FormsModule,
    LayoutContainerModule,
    MatFormFieldModule,
    MatDialogModule,
    SpinnerModule,
    MatDividerModule,
    PageTitleBarModule,
    FlexLayoutModule,
    MatInputModule,
  ],
  entryComponents: [QrjDialogComponent],
})
export class QrjModule {}
