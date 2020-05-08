import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

// Modules
import { DatabasesRoutingModule } from './databases-routing.module'

// Pages
import { DatabasesComponent } from './pages/databases'
import { MatButtonModule } from '@angular/material/button'
import { FlexLayoutModule } from '@angular/flex-layout'
import { LayoutContainerModule } from '@shared/components/layout-container'
import { PageTitleBarModule } from '@shared/components/page-title-bar/page-title-bar.module'
import { WosDialogComponent } from './components/wos-dialog/wos-dialog.component'
import { DialogModule } from '@shared/components/dialog'

@NgModule({
  declarations: [DatabasesComponent, WosDialogComponent],
  imports: [
    CommonModule,
    DatabasesRoutingModule,
    DialogModule,
    MatButtonModule,
    FlexLayoutModule,
    LayoutContainerModule,
    PageTitleBarModule,
  ],
})
export class DatabasesModule {}
