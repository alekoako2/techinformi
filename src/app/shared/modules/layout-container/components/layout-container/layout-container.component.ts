import { Component, Input } from '@angular/core'

@Component({
  selector: 'layout-container',
  templateUrl: './layout-container.component.html',
  styleUrls: ['./layout-container.component.scss'],
})
export class LayoutContainerComponent {
  @Input() backgroundColor?
  @Input() flexWidth = 60
  @Input() layoutStyle = 'column'
  @Input() ltLg?
}
