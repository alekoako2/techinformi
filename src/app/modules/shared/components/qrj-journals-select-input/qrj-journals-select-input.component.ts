import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Observable } from 'rxjs'
import { QrjJournal } from '@graphql'
import { QrjJournalService } from '@services/qrj-journal-service'

@Component({
  selector: 'qrj-journals-select-input',
  templateUrl: './qrj-journals-select-input.component.html',
  styleUrls: ['./qrj-journals-select-input.component.scss'],
})
export class QrjJournalsSelectInputComponent {
  @Output() qrjJournalChange = new EventEmitter<string>()
  @Input() qrjJournal: string

  qrjJournals$: Observable<QrjJournal[]>

  constructor(private qrjJournalsService: QrjJournalService) {}

  loadQrjJournals(): void {
    this.qrjJournals$ = this.qrjJournalsService.loadQrjJournals()
  }
}
