import { Component, OnInit } from '@angular/core'
import { Store } from '@ngxs/store'

import { OecdService } from '@services/oecd-service'

import { OecdsQuery_oecds } from '@gen-types'

@Component({
  selector: 'expert',
  templateUrl: './expert.component.html',
  styleUrls: ['./expert.component.scss'],
})
export class ExpertComponent implements OnInit {
  experts$
  countExperts$
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
