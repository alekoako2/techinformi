import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {QrjPublicationRoutingModule} from './qrj-publication-routing.module';
import {IndexComponent} from './pages/index/index.component';
import {SharedModule} from '../../../shared/modules/shared/shared.module';
import {NgxsModule} from '@ngxs/store';
import {QrjPublicationState} from './state/qrj-publication.state';
import {CustomInputsModule} from '../../../shared/modules/custom-inputs/custom-inputs.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgxsModule.forFeature([
      QrjPublicationState
    ]),
    QrjPublicationRoutingModule,
    CustomInputsModule,
    FormsModule
  ]
})
export class QrjPublicationModule {
}
