import { Component, EventEmitter, Input, Output } from '@angular/core'
import { ControlContainer, NgForm } from '@angular/forms'

@Component({
  selector: 'input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class InputSelectComponent {
  @Input() inputSelectModel: string
  @Output() inputSelectModelChange = new EventEmitter<string>()
  @Input() label: string
  @Input() array: []
  @Input() name: string
  @Input() required = false
}
