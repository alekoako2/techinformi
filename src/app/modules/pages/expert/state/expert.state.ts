import {State, Action, StateContext, Store} from '@ngxs/store';
import {ExpertsQuery_experts} from '../../../../types/operation-result-types';
import {take, tap} from 'rxjs/operators';
import {ExpertService} from '../services/expert.service';
import {LoadExperts} from './expert.actions';

export class ExpertStateModel {
  public experts: ExpertsQuery_experts[];
  public count: number;
}

@State<ExpertStateModel>({
  name: 'expert',
})
export class ExpertState {
  constructor(private store: Store, private expertsService: ExpertService) {
  }

  @Action(LoadExperts)
  loadPublications({patchState}: StateContext<ExpertStateModel>, action: LoadExperts) {

    let query = action.payload.query;
    let index = action.payload.index;
    let limit = action.payload.limit;


    return this.expertsService.loadExperts(query, index, limit).pipe(take(1), tap(res => {
      patchState({experts: res.experts, count: res.countExperts});

    }));
  }

}
