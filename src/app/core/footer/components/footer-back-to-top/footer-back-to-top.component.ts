import { Component } from '@angular/core'

@Component({
  selector: 'footer-back-to-top',
  templateUrl: './footer-back-to-top.component.html',
  styleUrls: ['./footer-back-to-top.component.scss'],
})
export class FooterBackToTopComponent {
  toTop(): void {
    document.getElementById('sidenav-content').scrollTo(0, 0)
  }
}
