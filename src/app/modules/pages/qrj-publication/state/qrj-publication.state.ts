import {State, Action, StateContext, Store} from '@ngxs/store';
import {QrjPublicationsQuery_qrjPublications} from '../../../../types/operation-result-types';
import {QrjPublicationService} from '../services/qrj-publication.service';
import {LoadQrjPublications} from './qrj-publication.actions';
import {first, take, tap} from 'rxjs/operators';

export class QrjPublicationStateModel {
  public qrjPublications: QrjPublicationsQuery_qrjPublications[];
  public count: number;
}

@State<QrjPublicationStateModel>({
  name: 'qrjPublication',
})
export class QrjPublicationState {
  constructor(private store: Store, private qrjPublicationsService: QrjPublicationService) {
  }

  @Action(LoadQrjPublications)
  loadPublications({patchState}: StateContext<QrjPublicationStateModel>, action: LoadQrjPublications) {

    let query = action.payload.query;
    let index = action.payload.index;
    let limit = action.payload.limit;


    return this.qrjPublicationsService.loadQrjPublications(query, index, limit).pipe(take(1), tap(res => {
      patchState({qrjPublications: res.qrjPublications, count: res.countQrjPublications});

    }));
  }

}
