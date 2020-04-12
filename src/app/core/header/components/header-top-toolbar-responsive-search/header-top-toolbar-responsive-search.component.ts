import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'header-top-toolbar-responsive-search',
  templateUrl: './header-top-toolbar-responsive-search.component.html',
  styleUrls: ['./header-top-toolbar-responsive-search.component.scss'],
})
export class HeaderTopToolbarResponsiveSearchComponent {
  @Output() closeSearch = new EventEmitter()

  onCloseResponsiveSearch(): void {
    this.closeSearch.emit()
  }
}
