import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FlexLayoutModule } from '@angular/flex-layout'

// NPM Modules
import { MaterialModule } from '../material'

// Custom Components
import { InputMultipleSelectComponent } from './input-multiple-select'
import { InputSelectWithKeyComponent } from './input-select-with-key'
import { InputTextAreaComponent } from './input-text-area'
import { LayoutContainerModule } from '../layout-container'
import { InputSelectComponent } from './input-select'
import { InputChipsComponent } from './input-chips'
import { YearPickerComponent } from './year-picker'
import { InputTextComponent } from './input-text'

@NgModule({
  declarations: [
    InputMultipleSelectComponent,
    InputSelectWithKeyComponent,
    InputTextAreaComponent,
    InputSelectComponent,
    InputChipsComponent,
    YearPickerComponent,
    InputTextComponent,
  ],
  exports: [
    InputMultipleSelectComponent,
    InputSelectWithKeyComponent,
    InputTextAreaComponent,
    InputSelectComponent,
    InputChipsComponent,
    YearPickerComponent,
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
