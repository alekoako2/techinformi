import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Oecd, QrjJournal } from '@graphql'

@Component({
  selector: 'input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss'],
})
export class InputSelectComponent {
  @Input() inputSelectModel: string
  @Output() inputSelectModelChange = new EventEmitter<string>()
  @Input() label: string
  @Input() array: Oecd[] | QrjJournal[]
  @Input() name: string
  @Input() required = false
}
