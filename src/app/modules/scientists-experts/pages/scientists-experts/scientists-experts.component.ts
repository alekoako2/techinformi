import { Component, OnInit } from '@angular/core'

import { OecdService } from '@services/oecd-service'
import { OecdsQuery } from '@graphql'

@Component({
  selector: 'scientists-experts',
  templateUrl: './scientists-experts.component.html',
  styleUrls: ['./scientists-experts.component.scss'],
})
export class ScientistsExpertsComponent implements OnInit {
  experts$
  countExperts$
  oecdList: OecdsQuery

  fullName: string
  oecd: string
  specialization: string

  constructor(private oecdService: OecdService) {}

  ngOnInit(): void {
    this.loadExperts()

    this.oecdService.loadOecds('', 0, 999).subscribe((res: { oecds }) => {
      this.oecdList = res.oecds
    })
  }

  loadExperts(index = 0, limit = 12): void {
    const sum = index + limit
    console.log(sum)
    // this.store.dispatch(new LoadExperts({
    //   query: {
    //     fullName: this.fullName,
    //     oecd: this.oecd,
    //     specialization: this.specialization
    //   }, index, limit
    // }));
  }
}
