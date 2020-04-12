import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {ResearchProjectsQuery_researchProjects, OecdsQuery_oecds} from '../../../../types/operation-result-types';
import {OecdService} from '../../../../core/services/oecd-service/oecd.service';

@Component({
  selector: 'app-research-project',
  templateUrl: './research-project.component.html',
  styleUrls: ['./research-project.component.scss']
})
export class ResearchProjectComponent implements OnInit {
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
    // this.store.dispatch(new LoadResearchProjects({
    //   query: {
    //     title: this.title,
    //     researchExecutors: this.researchExecutors,
    //     keyword: this.keyword,
    //     organizationName: this.organizationName,
    //     oecd: this.oecd,
    //   }, index, limit
    // }));
  }
}
