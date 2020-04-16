import { Component, EventEmitter, Input, Output } from '@angular/core'
import { ControlContainer, NgForm } from '@angular/forms'

@Component({
  selector: 'input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class InputTextComponent {
  @Input() inputModel: string
  @Output() inputModelChange = new EventEmitter<string>()
  @Input() placeholder: string
  @Input() name: string
  @Input() required = false
  @Input() type = 'text'
}
