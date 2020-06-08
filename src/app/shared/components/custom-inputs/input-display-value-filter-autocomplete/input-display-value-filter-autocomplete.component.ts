import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core'
import { MatChipInputEvent } from '@angular/material/chips'
import { COMMA, ENTER } from '@angular/cdk/keycodes'
import {
  AbstractControl,
  ControlContainer,
  FormControl,
  FormGroup,
  NgForm,
} from '@angular/forms'
import { Observable, of } from 'rxjs'
import { map, startWith, tap } from 'rxjs/operators'
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete'

export interface InputFilterAutocompleteListItem {
  value: string
  content: string
}

@Component({
  selector: 'input-display-value-filter-autocomplete',
  templateUrl: './input-display-value-filter-autocomplete.component.html',
  styleUrls: ['./input-display-value-filter-autocomplete.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class InputDisplayValueFilterAutocompleteComponent
  implements OnInit, OnChanges {
  @Input() inputAbstractControl: AbstractControl

  @Input()
  options: InputFilterAutocompleteListItem[]

  @Input() placeholder: string
  @Input() required = false

  formControl: FormControl

  autocompleteInputControl = new FormControl()
  filteredOptions: Observable<InputFilterAutocompleteListItem[]>

  ngOnInit(): void {
    this.formControl = this.inputAbstractControl as FormControl

    this.initializeFilteredOptions()
  }

  ngOnChanges(): void {
    const selectedValue = this.inputAbstractControl?.value
    if (selectedValue) {
      const selectedOption = this.options.filter(
        (option) => option.value === selectedValue
      )[0]
      this.autocompleteInputControl.setValue(selectedOption)
    }
  }

  initializeFilteredOptions = (): void => {
    this.filteredOptions = this.autocompleteInputControl.valueChanges.pipe(
      map((value: InputFilterAutocompleteListItem) =>
        typeof value === 'string' ? value : value?.content
      ),
      map((name: string) => (name ? this._filter(name) : this.options.slice()))
    )
  }

  private _filter = (item: string): InputFilterAutocompleteListItem[] => {
    if (item) {
      const filterValue = item.toLowerCase()

      return this.options.filter((option: InputFilterAutocompleteListItem) =>
        option.content.toLowerCase().includes(filterValue)
      )
    }
  }

  displayFn = (item?: InputFilterAutocompleteListItem): string | undefined =>
    item ? item.content : undefined

  optionSelected = ({ option }: MatAutocompleteSelectedEvent): void => {
    this.inputAbstractControl.setValue(option.value.value)
  }
}
