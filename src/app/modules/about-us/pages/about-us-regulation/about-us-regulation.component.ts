import { Component, Inject, LOCALE_ID } from '@angular/core'

@Component({
  selector: 'about-us-regulation',
  templateUrl: './about-us-regulation.component.html',
  styleUrls: ['./about-us-regulation.component.scss'],
})
export class AboutUsRegulationComponent {
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
