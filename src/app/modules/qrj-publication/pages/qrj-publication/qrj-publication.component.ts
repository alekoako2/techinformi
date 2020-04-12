import { Component, OnInit } from '@angular/core'
import { QrjPublicationService } from '../../../../core/services/qrj-publication-service/qrj-publication.service'
import { Observable } from 'rxjs'
import {
  OecdsQuery_oecds,
  QrjJournalsQuery_qrjJournals,
  QrjPublicationsQuery,
} from '../../../../types/operation-result-types'
import { OecdService } from '../../../../core/services/oecd-service/oecd.service'
import { QrjJournalService } from '../../../../core/services/qrj-journal-service/qrj-journal.service'

@Component({
  selector: 'qrj-publication',
  templateUrl: './qrj-publication.component.html',
  styleUrls: ['./qrj-publication.component.scss'],
})
export class QrjPublicationComponent implements OnInit {
  qrjPublications$: Observable<QrjPublicationsQuery>
  countQrjPublications = 0
  showSpinner = true

  oecdList: OecdsQuery_oecds[]
  qrjJournalList: QrjJournalsQuery_qrjJournals[]

  author: string
  title: string
  oecd: string
  qrjJournal: string

  constructor(
    private oecdService: OecdService,
    private qrjJournalService: QrjJournalService,
    private qrjPublicationService: QrjPublicationService
  ) {}

  ngOnInit(): void {
    this.loadQrjPublications()
    this.oecdService.loadOecds('', 0, 999).subscribe((res: { oecds }) => {
      this.oecdList = res.oecds
    })
    this.qrjJournalService
      .loadQrjJournals('', 0, 999)
      .subscribe((res: { qrjJournals }) => {
        this.qrjJournalList = res.qrjJournals
      })
  }

  loadQrjPublications(index = 0, limit = 12): void {
    this.qrjPublications$ = this.qrjPublicationService.loadQrjPublications(
      {
        author: this.author,
        title: this.title,
        oecd: this.oecd,
        qrjJournal: this.qrjJournal,
      },
      index,
      limit
    )
    this.qrjPublications$.subscribe((res: QrjPublicationsQuery) => {
      this.countQrjPublications = res.countQrjPublications
      this.showSpinner = false
    })
  }
}
