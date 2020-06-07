import { Component, Input, OnInit } from '@angular/core'
import { AbstractControl, FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss'],
})
export class InputSelectComponent implements OnInit {
  @Input() inputAbstractControl: AbstractControl

  @Input() options: number[] | string[]
  @Input() required = false
  @Input() label: string

  formControl: FormControl

  ngOnInit(): void {
    this.formControl = this.inputAbstractControl as FormControl
  }
}
