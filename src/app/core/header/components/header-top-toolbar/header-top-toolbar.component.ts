import { Component } from '@angular/core'
import { SidenavService } from '@services/sidenav-service'

@Component({
  selector: 'header-top-toolbar',
  templateUrl: './header-top-toolbar.component.html',
  styleUrls: ['./header-top-toolbar.component.scss'],
})
export class HeaderTopToolbarComponent {
  hidden = true

  constructor(private sidenavService: SidenavService) {}

  onToggleSidenav(): void {
    this.sidenavService.toggle()
  }
}
