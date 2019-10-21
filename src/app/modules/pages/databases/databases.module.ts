import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DatabasesRoutingModule} from './databases-routing.module';
import {IndexComponent} from './pages/index/index.component';
import {SharedModule} from '../../../shared/modules/shared/shared.module';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    SharedModule,
    DatabasesRoutingModule
  ]
})
export class DatabasesModule {
}
