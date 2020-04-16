import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

// Modules
import { DatabasesRoutingModule } from './databases-routing.module'
import { SharedModule } from '@shared'

// Pages
import { DatabasesComponent } from './pages/databases'

@NgModule({
  declarations: [DatabasesComponent],
  imports: [CommonModule, SharedModule, DatabasesRoutingModule],
})
export class DatabasesModule {}
