import { Component } from '@angular/core'
import { QrjPublicationService } from '@http/qrj-publication-service'
import { ActivatedRoute } from '@angular/router'
import { QrjPublication } from '@graphql'
import { Observable } from 'rxjs'

@Component({
  selector: 'qrj-publication-details',
  templateUrl: './qrj-publication-details.component.html',
  styleUrls: ['./qrj-publication-details.component.scss'],
})
export class QrjPublicationDetailsComponent {
  qrjPublication$: Observable<QrjPublication>

  constructor(
    private qrjPublicationService: QrjPublicationService,
    private route: ActivatedRoute
  ) {
    const id = this.route.snapshot.paramMap.get('id')
    this.qrjPublication$ = qrjPublicationService.loadQrjPublication(id)
  }
}
