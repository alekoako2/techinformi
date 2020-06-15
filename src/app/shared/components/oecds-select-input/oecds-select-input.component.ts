import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Oecd } from '@graphql'
import { first } from 'rxjs/operators'
import { InputSelectListItem } from '@shared/components/custom-inputs/input-select-with-key/input-select-with-key.component'
import { OecdService } from '@http/oecd-service'
import { AbstractControl } from '@angular/forms'

@Component({
  selector: 'oecds-select-input',
  templateUrl: './oecds-select-input.component.html',
  styleUrls: ['./oecds-select-input.component.scss'],
})
export class OecdsSelectInputComponent {
  @Input() inputAbstractControl: AbstractControl

  oecdsSelectList: InputSelectListItem[]

  constructor(private oecdService: OecdService) {
    this.loadOecdsSelectList()
  }

  loadOecdsSelectList(): void {
    this.oecdService
      .loadOecds()
      .pipe(first())
      .subscribe((oecds: Oecd[]) => {
        this.oecdsSelectList = oecds.map((oecd: Oecd) => ({
          key: oecd.code,
          name: oecd.translation[0].name,
        }))
      })
  }
}
