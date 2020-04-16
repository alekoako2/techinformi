import { Injectable } from '@angular/core'
import { MatPaginatorIntl } from '@angular/material/paginator'
import { LanguageService } from '@services/language-service'
import { LanguageCode } from '@graphql'

@Injectable({
  providedIn: 'root',
})
export class MatPaginatorIntlService extends MatPaginatorIntl {
  firstPageLabel
  itemsPerPageLabel
  lastPageLabel
  nextPageLabel
  previousPageLabel
  getRangeLabel

  constructor(private languageService: LanguageService) {
    super()
    switch (languageService.currentLanguage) {
      case LanguageCode.KA:
        this.firstPageLabel = '1'
        this.itemsPerPageLabel = 'ჩანაწერები ერთ გვერდზე'
        this.lastPageLabel = '3'
        this.nextPageLabel = '4'
        this.previousPageLabel = '5'
        this.getRangeLabel = (page, pageSize, length): string => {
          if (length === 0 || pageSize === 0) {
            return '0 დან ' + length
          }
          length = Math.max(length, 0)
          const startIndex = page * pageSize
          const endIndex =
            startIndex < length
              ? Math.min(startIndex + pageSize, length)
              : startIndex + pageSize
          return `${startIndex + 1} - ${endIndex} : ${length} დან`
        }
        break
    }
  }
}
