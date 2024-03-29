import { Directive, HostListener, Input } from '@angular/core'
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar'

@Directive({
  selector: '[snackbar]',
})
export class SnackbarDirective {
  @Input() snackBarMessage: string

  constructor(private snackBar: MatSnackBar) {}

  @HostListener('click') onClick(): void {
    this.openSnackBar()
  }

  openSnackBar(): void {
    const config = new MatSnackBarConfig()
    config.duration = 2000
    config.panelClass = ['custom-snackbar']
    this.snackBar.open(this.snackBarMessage, 'დახურვა', config)
  }
}
