import { Component, Inject, LOCALE_ID } from '@angular/core'

@Component({
  selector: 'header-top-toolbar-user-tools-language',
  templateUrl: './header-top-toolbar-user-tools-language.component.html',
  styleUrls: ['./header-top-toolbar-user-tools-language.component.scss'],
})
export class HeaderTopToolbarUserToolsLanguageComponent {
  constructor(@Inject(LOCALE_ID) public localeId: string) {}
}
