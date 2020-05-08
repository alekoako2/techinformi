import { Component } from '@angular/core'
import { LanguageService } from '@services/language-service'
import { LanguageCode } from '@graphql'

@Component({
  selector: 'header-top-toolbar-user-tools-language',
  templateUrl: './header-top-toolbar-user-tools-language.component.html',
  styleUrls: ['./header-top-toolbar-user-tools-language.component.scss'],
})
export class HeaderTopToolbarUserToolsLanguageComponent {
  LANG = LanguageCode
  constructor(public languageService: LanguageService) {}
}
