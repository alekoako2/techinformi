import { Component, OnInit } from '@angular/core'
import { QrjPublicationService } from '@services/qrj-publication-service'

import { ProgressBarService } from '@services/progress-bar-service'
import { QrjPublicationsQuery } from '@graphql'

@Component({
  selector: 'qrj-publications',
  templateUrl: './qrj-publications.component.html',
  styleUrls: ['./qrj-publications.component.scss'],
})
export class QrjPublicationsComponent implements OnInit {
  qrjPublications: QrjPublicationsQuery

  skeleton = true

  author = ''
  title: string
  oecd: string
  qrjJournal: string

  pageIndex = 0
  pageSize = 10

  arr = new Array(5).fill(0)

  constructor(
    private qrjPublicationService: QrjPublicationService,
    private progressBarService: ProgressBarService
  ) {
    this.progressBarService.show(true)
  }

  ngOnInit(): void {
    this.loadQrjPublications()
  }

  loadQrjPublications(): void {
    this.skeleton = true
    this.qrjPublicationService
      .loadQrjPublications(
        {
          author: this.author,
          title: this.title,
          oecd: this.oecd,
          qrjJournal: this.qrjJournal,
        },
        this.pageIndex,
        this.pageSize
      )
      .subscribe((res: QrjPublicationsQuery) => {
        this.qrjPublications = res
        this.skeleton = false
        this.progressBarService.show(false)
      })
  }

  loadPressed(event): void {
    this.pageIndex = event.pageIndex
    this.pageSize = event.pageSize
    this.loadQrjPublications()
  }

  searchPressed(): void {
    this.pageIndex = 0
    this.loadQrjPublications()
  }

  transformUrl(qrjPublication): string {
    return (
      qrjPublication.translation[0].title.split(' ').join('-') +
      '/' +
      qrjPublication.id
    )
  }
}
