import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// Components
import { DialogComponent } from './dialog.component'
import { MatDialogModule } from '@angular/material/dialog'
import { FlexModule } from '@angular/flex-layout'
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [DialogComponent],
  imports: [CommonModule, MatDialogModule, FlexModule, MatButtonModule],
  exports: [DialogComponent],
})
export class DialogModule {}
