import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Observable } from 'rxjs'
import { Oecd } from '@graphql'
import { OecdService } from '@services/oecd-service'

@Component({
  selector: 'oecds-select-input',
  templateUrl: './oecds-select-input.component.html',
  styleUrls: ['./oecds-select-input.component.scss'],
})
export class OecdsSelectInputComponent {
  @Output() oecdChange = new EventEmitter<string>()
  @Input() oecd: string

  oecds$: Observable<Oecd[]>

  constructor(private oecdService: OecdService) {}

  loadOecds(): void {
    this.oecds$ = this.oecdService.loadOecds()
  }
}
