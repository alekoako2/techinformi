import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'header-top-toolbar',
  templateUrl: './header-top-toolbar.component.html',
  styleUrls: ['./header-top-toolbar.component.scss'],
})
export class HeaderTopToolbarComponent {
  @Output() sidenavToggle = new EventEmitter()
  hidden = true

  onToggleSidenav(): void {
    this.sidenavToggle.emit()
  }
}
