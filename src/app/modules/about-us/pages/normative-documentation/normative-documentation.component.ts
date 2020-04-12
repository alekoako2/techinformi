import { Component, Inject, LOCALE_ID } from '@angular/core'

@Component({
  selector: 'normative-documentation',
  templateUrl: './normative-documentation.component.html',
  styleUrls: ['./normative-documentation.component.scss'],
})
export class NormativeDocumentationComponent {
  constructor(@Inject(LOCALE_ID) public localeId: string) {}
}
