import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// Components
import { DialogComponent } from './dialog'

@NgModule({
  declarations: [DialogComponent],
  imports: [CommonModule],
  exports: [DialogComponent],
})
export class DialogModule {}
