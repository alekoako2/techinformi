import { LanguageCode } from '@gen-types'

export enum SidenavListItemType {
  BUTTON,
  ACCORDION,
}

export interface SidenavListItem {
  type: SidenavListItemType
  name: {
    languageCode: LanguageCode
    value: string
  }[]
  routerLink?: string
  list?: SidenavListItem[]
}
