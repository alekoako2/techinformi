import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {
  OecdsQuery_oecds,
  ExpertsQuery_experts
} from '../../../../../types/operation-result-types';
import {OecdService} from '../../../../../shared/services/oecd/oecd.service';
import {LoadExperts} from '../../state/expert.actions';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  @Select(state => state.expert.experts) experts$: Observable<ExpertsQuery_experts[]>;
  @Select(state => state.expert.count) countExperts$: Observable<number>;

  oecdList: OecdsQuery_oecds[];

  fullName: string;
  oecd: string;
  specialization: string;

  constructor(private store: Store, private oecdService: OecdService) {
  }

  ngOnInit() {
    this.loadExperts();

    this.oecdService.loadOecds('', 0, 999).subscribe(res => {
      this.oecdList = res.oecds;
    });
  }

  loadExperts(index = 0, limit = 12) {
    this.store.dispatch(new LoadExperts({
      query: {
        fullName: this.fullName,
        oecd: this.oecd,
        specialization: this.specialization
      }, index, limit
    }));
  }

}
