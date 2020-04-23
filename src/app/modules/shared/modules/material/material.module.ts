import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// Material Modules
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatExpansionModule } from '@angular/material/expansion'
import {
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog'
import { MatSelectModule } from '@angular/material/select'
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core'
import { MatTableModule } from '@angular/material/table'
import { MatBadgeModule } from '@angular/material/badge'
import { MatChipsModule } from '@angular/material/chips'
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatMenuModule } from '@angular/material/menu'

// Services
import { MatPaginatorIntlService } from './services/MatPaginatorIntl/mat-paginator-intl.service'
import { MatDatepickerModule } from '@angular/material/datepicker'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatGridListModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatOptionModule,
    MatTableModule,
    MatBadgeModule,
    MatChipsModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
  ],
  exports: [
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatGridListModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatOptionModule,
    MatTableModule,
    MatBadgeModule,
    MatChipsModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: MatPaginatorIntlService }],
})
export class MaterialModule {}
