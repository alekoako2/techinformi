import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {ResearchProjectsQuery_researchProjects, OecdsQuery_oecds} from '../../../../../types/operation-result-types';
import {OecdService} from '../../../../../shared/services/oecd/oecd.service';
import {LoadResearchProjects} from '../../state/research-project.actions';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  @Select(state => state.researchProject.researchProjects) researchProjects$: Observable<ResearchProjectsQuery_researchProjects[]>;
  @Select(state => state.researchProject.count) countResearchProjects$: Observable<number>;

  oecdList: OecdsQuery_oecds[];

  title: string;
  researchExecutors: string;
  keyword: string;
  organizationName: string;
  oecd: string;

  constructor(private store: Store, private oecdService: OecdService) {
  }

  ngOnInit() {
    this.loadResearchProjects();

    this.oecdService.loadOecds('', 0, 999).subscribe(res => {
      this.oecdList = res.oecds;
    });
  }

  loadResearchProjects(index = 0, limit = 12) {
    this.store.dispatch(new LoadResearchProjects({
      query: {
        title: this.title,
        researchExecutors: this.researchExecutors,
        keyword: this.keyword,
        organizationName: this.organizationName,
        oecd: this.oecd,
      }, index, limit
    }));
  }
}
