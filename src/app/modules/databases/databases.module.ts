import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { DatabasesRoutingModule } from './databases-routing.module'
import { SharedModule } from '../../shared/modules/shared/shared.module'
import { DatabasesComponent } from './pages/databases/databases.component'

@NgModule({
  declarations: [DatabasesComponent],
  imports: [CommonModule, SharedModule, DatabasesRoutingModule],
})
export class DatabasesModule {}
