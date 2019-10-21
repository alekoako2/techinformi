import {State, Action, StateContext, Store} from '@ngxs/store';
import {take, tap} from 'rxjs/operators';
import {ResearchProjectsQuery_researchProjects} from '../../../../types/operation-result-types';
import {ResearchProjectService} from '../services/research-project.service';
import {LoadResearchProjects} from './research-project.actions';

export class ResearchProjectStateModel {
  public researchProjects: ResearchProjectsQuery_researchProjects[];
  public count: number;
}

@State<ResearchProjectStateModel>({
  name: 'researchProject',
})
export class ResearchProjectState {
  constructor(private store: Store, private researchProjectsService: ResearchProjectService) {
  }

  @Action(LoadResearchProjects)
  loadPublications({patchState}: StateContext<ResearchProjectStateModel>, action: LoadResearchProjects) {

    let query = action.payload.query;
    let index = action.payload.index;
    let limit = action.payload.limit;


    return this.researchProjectsService.loadResearchProjects(query, index, limit).pipe(take(1), tap(res => {
      patchState({researchProjects: res.researchProjects, count: res.countResearchProjects});

    }));
  }
}
