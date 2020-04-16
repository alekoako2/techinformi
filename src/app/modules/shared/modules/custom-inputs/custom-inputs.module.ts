import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FlexLayoutModule } from '@angular/flex-layout'

// NPM Modules
import { MaterialModule } from '../material'

// Custom Components
import { InputMultipleSelectComponent } from './input-multiple-select'
import { LayoutContainerModule } from '../layout-container'
import { InputTextAreaComponent } from './input-text-area'
import { InputSelectComponent } from './input-select'
import { InputChipsComponent } from './input-chips'
import { InputTextComponent } from './input-text'

@NgModule({
  declarations: [
    InputMultipleSelectComponent,
    InputTextAreaComponent,
    InputSelectComponent,
    InputChipsComponent,
    InputTextComponent,
  ],
  exports: [
    InputMultipleSelectComponent,
    InputTextAreaComponent,
    InputSelectComponent,
    InputChipsComponent,
    InputTextComponent,
  ],
  imports: [
    LayoutContainerModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    CommonModule,
    FormsModule,
  ],
})
export class CustomInputsModule {}
