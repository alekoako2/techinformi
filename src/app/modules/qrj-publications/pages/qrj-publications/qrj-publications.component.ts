import { Component, OnInit } from '@angular/core'
import { QrjPublicationService } from '@http/qrj-publication-service'

import { ProgressBarService } from '@services/progress-bar-service'
import { QrjPublicationsQuery } from '@graphql'
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'qrj-publications',
  templateUrl: './qrj-publications.component.html',
  styleUrls: ['./qrj-publications.component.scss'],
})
export class QrjPublicationsComponent implements OnInit {
  qrjPublications: QrjPublicationsQuery

  skeleton = true

  pageIndex = 0
  pageSize = 10

  qrjPublicationsForm: FormGroup

  constructor(
    private qrjPublicationService: QrjPublicationService,
    private progressBarService: ProgressBarService,
    private fb: FormBuilder
  ) {
    this.progressBarService.show(true)
  }

  ngOnInit(): void {
    this.buildForm()
    this.loadQrjPublications()
  }

  buildForm = (): void => {
    this.qrjPublicationsForm = this.fb.group({
      author: [null],
      title: [null],
      oecd: [null],
      qrjJournal: [null],
    })
  }

  loadQrjPublications(): void {
    this.skeleton = true
    this.qrjPublicationService
      .loadQrjPublications(
        {
          translation: {
            publicationAuthor: this.qrjPublicationsForm.get('author').value,
            title: this.qrjPublicationsForm.get('title').value,
          },
          oecd: this.qrjPublicationsForm.get('oecd').value,
          qrjJournal: this.qrjPublicationsForm.get('qrjJournal').value,
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
