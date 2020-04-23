import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { Expert } from '@graphql'
import { ActivatedRoute } from '@angular/router'
import { ExpertsService } from '@services/scientists-experts-service'

@Component({
  selector: 'expert-details',
  templateUrl: './expert-details.component.html',
  styleUrls: ['./expert-details.component.scss'],
})
export class ExpertDetailsComponent {
  expert$: Observable<Expert>

  constructor(
    private expertsService: ExpertsService,
    private route: ActivatedRoute
  ) {
    const id = this.route.snapshot.paramMap.get('id')
    this.expert$ = expertsService.loadExpert(id)
  }
}
