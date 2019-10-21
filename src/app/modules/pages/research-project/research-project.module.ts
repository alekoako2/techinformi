import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ResearchProjectRoutingModule} from './research-project-routing.module';
import {IndexComponent} from './pages/index/index.component';
import {SharedModule} from '../../../shared/modules/shared/shared.module';
import {CustomInputsModule} from '../../../shared/modules/custom-inputs/custom-inputs.module';
import {NgxsModule} from '@ngxs/store';
import {FormsModule} from '@angular/forms';
import {ResearchProjectState} from './state/research-project.state';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    SharedModule,
    CustomInputsModule,
    NgxsModule.forFeature([
      ResearchProjectState
    ]),
    FormsModule,
    ResearchProjectRoutingModule
  ]
})
export class ResearchProjectModule {
}
