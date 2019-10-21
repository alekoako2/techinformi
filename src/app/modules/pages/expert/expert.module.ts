import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ExpertRoutingModule} from './expert-routing.module';
import {IndexComponent} from './pages/index/index.component';
import {CustomInputsModule} from '../../../shared/modules/custom-inputs/custom-inputs.module';
import {SharedModule} from '../../../shared/modules/shared/shared.module';
import {FormsModule} from '@angular/forms';
import {NgxsModule} from '@ngxs/store';
import {ExpertState} from './state/expert.state';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    ExpertRoutingModule,
    SharedModule,
    CustomInputsModule,
    NgxsModule.forFeature([
      ExpertState
    ]),
    FormsModule
  ]
})
export class ExpertModule {
}
