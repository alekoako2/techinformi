import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { AbstractControl, FormControl } from '@angular/forms'
import { InputFilterAutocompleteListItem } from '@shared/components/custom-inputs/input-display-value-filter-autocomplete/input-display-value-filter-autocomplete.component'

export interface InputSelectListItem {
  key: string
  name: string
}
@Component({
  selector: 'input-select-with-key',
  templateUrl: './input-select-with-key.component.html',
  styleUrls: ['./input-select-with-key.component.scss'],
})
export class InputSelectWithKeyComponent implements OnInit {
  @Input() inputAbstractControl: AbstractControl
  @Input() label: string
  @Input() options: InputSelectListItem[]
  @Input() required = false

  formControl: FormControl

  ngOnInit(): void {
    this.formControl = this.inputAbstractControl as FormControl
  }
}
