import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Oecd, QrjJournal } from '@graphql'

@Component({
  selector: 'input-select-with-key',
  templateUrl: './input-select-with-key.component.html',
  styleUrls: ['./input-select-with-key.component.scss'],
})
export class InputSelectWithKeyComponent {
  @Input() inputSelectModel: string
  @Output() inputSelectModelChange = new EventEmitter<string>()
  @Input() label: string
  @Input() array: Oecd[] | QrjJournal[]
  @Input() name: string
  @Input() required = false
}
