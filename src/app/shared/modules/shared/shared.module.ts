import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MaterialModule } from '../material/material.module'
import { LayoutContainerModule } from '../layout-container/layout-container.module'
import { SpinnerModule } from '../spinner/spinner.module'
import { FirebaseModule } from '../firebase/firebase.module'
import { CustomInputsModule } from '../custom-inputs/custom-inputs.module'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    LayoutContainerModule,
    SpinnerModule,
    FirebaseModule,
    CustomInputsModule,
  ],
  exports: [
    FlexLayoutModule,
    MaterialModule,
    LayoutContainerModule,
    SpinnerModule,
  ],
})
export class SharedModule {}
