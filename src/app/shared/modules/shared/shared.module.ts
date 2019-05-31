import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '../material/material.module';
import {LayoutContainerModule} from '../layout-container/layout-container.module';
import {SpinnerModule} from '../spinner/spinner.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    LayoutContainerModule,
    SpinnerModule
  ],
  exports: [
    FlexLayoutModule,
    MaterialModule,
    LayoutContainerModule,
    SpinnerModule
  ]
})
export class SharedModule {
}
