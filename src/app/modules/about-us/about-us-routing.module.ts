import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

// Pages
import { AboutUsNormativeDocumentationComponent } from './pages/about-us-normative-documentation'
import { AboutUsEmployeesStructureComponent } from './pages/about-us-employees-structure'
import { AboutUsRegulationComponent } from './pages/about-us-regulation'
import { AboutUsEmployeesComponent } from './pages/about-us-employees'
import { AboutUsGeneralComponent } from './pages/about-us-general'

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'regulation', component: AboutUsRegulationComponent },
      { path: 'employees', component: AboutUsEmployeesComponent },
      { path: 'general', component: AboutUsGeneralComponent },
      {
        path: 'normative-documentation',
        component: AboutUsNormativeDocumentationComponent,
      },
      {
        path: 'employees-structure',
        component: AboutUsEmployeesStructureComponent,
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutUsRoutingModule {}
