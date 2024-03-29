import { Component, Inject, LOCALE_ID } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  email = new FormControl('', [Validators.required, Validators.email])

  constructor(@Inject(LOCALE_ID) public localeId: string) {}

  getErrorMessage(): {} {
    return this.localeId === 'ka'
      ? this.email.hasError('required')
        ? 'უნდა ჩაწეროთ თქვენი ელ.ფოსტა'
        : this.email.hasError('email')
        ? 'ელ.ფოსტა არასწორია'
        : ''
      : this.email.hasError('required')
      ? 'Please type your Email'
      : this.email.hasError('email')
      ? 'Email is incorrect!'
      : ''
  }
}
