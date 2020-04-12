import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private apollo: Apollo) {
  }

  // loadEmployees(){
  //   return this.apollo
  //     .watchQuery<EmployeesQuery>({
  //       variables: {
  //         languageCode: this.localeId.toUpperCase(),
  //         first: limit,
  //         skip: index * limit,
  //         query: {...query}
  //       },
  //       query: employeesQuery
  //     }).valueChanges.pipe(map(qrjsData => qrjsData.data));
  // }
}
