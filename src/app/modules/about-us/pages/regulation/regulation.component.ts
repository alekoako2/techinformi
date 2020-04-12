import { Component, Inject, LOCALE_ID } from '@angular/core'

@Component({
  selector: 'regulation',
  templateUrl: './regulation.component.html',
  styleUrls: ['./regulation.component.scss'],
})
export class RegulationComponent {
  title: string
  urls: object = {
    en: Array(7)
      .fill(0)
      .map((x, i) => i + 1),
    ka: Array(11)
      .fill(0)
      .map((x, i) => i + 1),
  }

  constructor(@Inject(LOCALE_ID) public localeId: string) {}
}
