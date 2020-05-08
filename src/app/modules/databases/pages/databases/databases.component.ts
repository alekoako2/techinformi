import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { WosDialogComponent } from '../../components/wos-dialog/wos-dialog.component'

@Component({
  selector: 'databases',
  templateUrl: './databases.component.html',
  styleUrls: ['./databases.component.scss'],
})
export class DatabasesComponent {
  constructor(private dialog: MatDialog) {}

  openWosDialog = () =>
    this.dialog.open(WosDialogComponent, {
      width: '550px',
      data: { title: 'aleko' },
    })
}
