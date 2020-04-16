import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

// Modules
import { AboutUsRoutingModule } from './about-us-routing.module'
import { SharedModule } from '@shared'

// Pages
import { AboutUsNormativeDocumentationComponent } from './pages/about-us-normative-documentation'
import { AboutUsEmployeesStructureComponent } from './pages/about-us-employees-structure'
import { AboutUsRegulationComponent } from './pages/about-us-regulation'
import { AboutUsEmployeesComponent } from './pages/about-us-employees/'
import { AboutUsGeneralComponent } from './pages/about-us-general'

// Components
import { AboutUsEmployeesStructureDialogComponent } from './components/about-us-employees-structure-dialog'

@NgModule({
  declarations: [
    AboutUsEmployeesStructureDialogComponent,
    AboutUsNormativeDocumentationComponent,
    AboutUsEmployeesStructureComponent,
    AboutUsRegulationComponent,
    AboutUsEmployeesComponent,
    AboutUsGeneralComponent,
  ],
  exports: [],
  imports: [CommonModule, SharedModule, AboutUsRoutingModule],
})
export class AboutUsModule {}
