import { Component } from '@angular/core'
import { MatExpansionPanel } from '@angular/material/expansion'
import { SidenavListService } from '@services/sidenav-list-service'
import {
  SidenavListItem,
  SidenavListItemType,
} from '../../../../models/Sidenav-List'
import { SidenavService } from '@services/sidenav-service'
import { LanguageService } from '@services/language-service'

@Component({
  selector: 'header-sidenav-list',
  templateUrl: './header-sidenav-list.component.html',
  styleUrls: ['./header-sidenav-list.component.scss'],
  viewProviders: [MatExpansionPanel],
})
export class HeaderSidenavListComponent {
  sidenavList: SidenavListItem[] = this.sidenavListService.SidenavList
  TYPE = SidenavListItemType

  constructor(
    private sidenavListService: SidenavListService,
    private sidenavService: SidenavService,
    private languageService: LanguageService
  ) {}

  getNameByCurrentLocale(nameArr): string {
    return nameArr.filter(
      (name) => name.languageCode === this.languageService.currentLanguage
    )[0].value
  }
}
