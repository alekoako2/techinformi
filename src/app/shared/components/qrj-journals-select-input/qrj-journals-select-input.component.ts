import { Component, EventEmitter, Input, Output } from '@angular/core'
import { QrjJournal } from '@graphql'
import { first } from 'rxjs/operators'
import { InputSelectListItem } from '@shared/components/custom-inputs/input-select-with-key/input-select-with-key.component'
import { QrjJournalService } from '@http/qrj-journal-service'
import { AbstractControl } from '@angular/forms'

@Component({
  selector: 'qrj-journals-select-input',
  templateUrl: './qrj-journals-select-input.component.html',
  styleUrls: ['./qrj-journals-select-input.component.scss'],
})
export class QrjJournalsSelectInputComponent {
  @Input() inputAbstractControl: AbstractControl

  qrjJournalsSelectList: InputSelectListItem[]

  constructor(private qrjJournalsService: QrjJournalService) {
    this.loadQrjJournalsSelectList()
  }

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
