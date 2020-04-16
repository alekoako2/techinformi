import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// NPM Modules
import { FlexLayoutModule } from '@angular/flex-layout'
import { MaterialModule } from '../material'

// Components
import { LayoutContainerComponent } from './components/layout-container'

@NgModule({
  declarations: [LayoutContainerComponent],
  imports: [CommonModule, FlexLayoutModule, MaterialModule],
  exports: [LayoutContainerComponent],
})
export class LayoutContainerModule {}
