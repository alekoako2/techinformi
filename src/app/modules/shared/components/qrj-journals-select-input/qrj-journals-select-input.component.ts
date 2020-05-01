import { Component, EventEmitter, Input, Output } from '@angular/core'
import { QrjJournal } from '@graphql'
import { QrjJournalService } from '@services/qrj-journal-service'
import { first } from 'rxjs/operators'
import { InputSelectListItem } from '../../modules/custom-inputs/input-select-with-key'

@Component({
  selector: 'qrj-journals-select-input',
  templateUrl: './qrj-journals-select-input.component.html',
  styleUrls: ['./qrj-journals-select-input.component.scss'],
})
export class QrjJournalsSelectInputComponent {
  @Output() qrjJournalChange = new EventEmitter<string>()
  @Input() qrjJournal: string

  qrjJournalsSelectList: InputSelectListItem[]

  constructor(private qrjJournalsService: QrjJournalService) {}

  loadQrjJournalsSelectList(): void {
    this.qrjJournalsService
      .loadQrjJournals()
      .pipe(first())
      .subscribe(
        (qrjJournals: QrjJournal[]) =>
          (this.qrjJournalsSelectList = qrjJournals.map(
            (qrjJournal: QrjJournal) => ({
              key: qrjJournal.code,
              name: qrjJournal.translation[0].name,
            })
          ))
      )
  }
}
