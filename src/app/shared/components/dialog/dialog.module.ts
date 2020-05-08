import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// Components
import { DialogComponent } from './dialog.component'
import { MatDialogModule } from '@angular/material/dialog'

@NgModule({
  declarations: [DialogComponent],
  imports: [CommonModule, MatDialogModule],
  exports: [DialogComponent],
})
export class DialogModule {}
