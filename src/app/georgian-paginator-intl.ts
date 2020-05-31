import { MatPaginatorIntl } from '@angular/material/paginator'

const georgianRangeLabel = (page: number, pageSize: number, length: number) => {
  if (length == 0 || pageSize == 0) {
    return `0 ${length} დან`
  }

  length = Math.max(length, 0)

  const startIndex = page * pageSize

  const endIndex =
    startIndex < length
      ? Math.min(startIndex + pageSize, length)
      : startIndex + pageSize

  return `${startIndex + 1} - ${endIndex}: ${length}-დან`
}

export function getGeorgianPaginatorIntl() {
  const paginatorIntl = new MatPaginatorIntl()

  paginatorIntl.itemsPerPageLabel = 'ჩანაწერები გვერდზე:'
  paginatorIntl.nextPageLabel = 'შემდეგი გვერდი'
  paginatorIntl.previousPageLabel = 'წინა გვერდი'
  paginatorIntl.getRangeLabel = georgianRangeLabel

  return paginatorIntl
}
