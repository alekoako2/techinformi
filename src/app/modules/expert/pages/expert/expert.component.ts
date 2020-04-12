import { Component, OnInit } from '@angular/core'
import { Select, Store } from '@ngxs/store'
import { Observable } from 'rxjs'
import {
  OecdsQuery_oecds,
  ExpertsQuery_experts,
} from '../../../../types/operation-result-types'
import { OecdService } from '../../../../core/services/oecd-service/oecd.service'

@Component({
  selector: 'expert',
  templateUrl: './expert.component.html',
  styleUrls: ['./expert.component.scss'],
})
export class ExpertComponent implements OnInit {
  @Select((state) => state.expert.experts) experts$: Observable<
    ExpertsQuery_experts[]
  >
  @Select((state) => state.expert.count) countExperts$: Observable<number>

  oecdList: OecdsQuery_oecds[]

  fullName: string
  oecd: string
  specialization: string

  constructor(private store: Store, private oecdService: OecdService) {}

  ngOnInit() {
    this.loadExperts()

    this.oecdService.loadOecds('', 0, 999).subscribe((res: { oecds }) => {
      this.oecdList = res.oecds
    })
  }

  loadExperts(index = 0, limit = 12) {
    // this.store.dispatch(new LoadExperts({
    //   query: {
    //     fullName: this.fullName,
    //     oecd: this.oecd,
    //     specialization: this.specialization
    //   }, index, limit
    // }));
  }
}
