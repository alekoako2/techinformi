import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'

// Modules
import { QrjRoutingModule } from './qrj-routing.module'
import { SharedModule } from '@shared'

// Pages
import { QrjComponent } from './pages/qrj'

// Components
import { QrjDescriptionComponent } from './components/qrj-description'
import { FilterOecdPipe } from './components/qrj-dialog/pipes'
import { QrjDialogComponent } from './components/qrj-dialog'

@NgModule({
  declarations: [
    QrjDescriptionComponent,
    QrjDialogComponent,
    FilterOecdPipe,
    FilterOecdPipe,
    QrjComponent,
  ],
  imports: [CommonModule, SharedModule, QrjRoutingModule, FormsModule],
  entryComponents: [QrjDialogComponent],
})
export class QrjModule {}
