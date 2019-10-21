import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {ResearchProjectsQuery} from '../../../../types/operation-result-types';
import {map} from 'rxjs/operators';
import {researchProjectsQuery} from './research-project-query';

@Injectable({
  providedIn: 'root'
})
export class ResearchProjectService {
  constructor(private apollo: Apollo, @Inject(LOCALE_ID) public localeId: string) {
  }

  loadResearchProjects(query = {title: '', researchExecutors: '', keyword: '', organizationName: '', oecd: ''}, index = 0, limit = 12) {
    return this.apollo
      .watchQuery<ResearchProjectsQuery>({
        variables: {
          languageCode: this.localeId.toUpperCase(),
          first: limit,
          skip: index * limit,
          query: {...query}
        },
        query: researchProjectsQuery
      }).valueChanges.pipe(map(qrjsData => qrjsData.data));
  }

}
