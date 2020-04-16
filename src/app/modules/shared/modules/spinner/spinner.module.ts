import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// NPM Modules
import { FlexLayoutModule } from '@angular/flex-layout'
import { MaterialModule } from '../material'

// Components
import { SpinnerComponent } from './spinner'
import { LayoutContainerModule } from '../layout-container'

@NgModule({
  declarations: [SpinnerComponent],
  imports: [
    CommonModule,
    LayoutContainerModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  exports: [SpinnerComponent],
})
export class SpinnerModule {}
