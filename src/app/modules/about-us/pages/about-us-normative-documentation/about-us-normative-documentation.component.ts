import { Component, Inject, LOCALE_ID } from '@angular/core'

@Component({
  selector: 'about-us-normative-documentation',
  templateUrl: './about-us-normative-documentation.component.html',
  styleUrls: ['./about-us-normative-documentation.component.scss'],
})
export class AboutUsNormativeDocumentationComponent {
  constructor(@Inject(LOCALE_ID) public localeId: string) {}
}
