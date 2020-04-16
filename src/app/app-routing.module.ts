import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'

// Modules
import { ScientificActivityModule } from './modules/scientific-activity'
import { ResearchProjectModule } from './modules/research-project'
import { QrjPublicationModule } from './modules/qrj-publication'
import { ServicesPageModule } from './modules/services-page'
import { PublicationsModule } from './modules/publications'
import { PartnershipModule } from './modules/partnership'
import { DatabasesModule } from './modules/databases'
import { AboutUsModule } from './modules/about-us'
import { ContactModule } from './modules/contact'
import { ExpertModule } from './modules/expert'
import { HomeModule } from './modules/home'
import { QrjModule } from './modules/qrj'

const appRoutes: Routes = [
  {
    path: 'scientific-activity',
    loadChildren: (): Promise<ScientificActivityModule> =>
      import('./modules/scientific-activity').then(
        (mod) => mod.ScientificActivityModule
      ),
  },
  {
    path: 'scientists-experts',
    loadChildren: (): Promise<ExpertModule> =>
      import('./modules/expert').then((mod) => mod.ExpertModule),
  },
  {
    path: 'research-project',
    loadChildren: (): Promise<ResearchProjectModule> =>
      import('./modules/research-project').then(
        (mod) => mod.ResearchProjectModule
      ),
  },
  {
    path: 'qrj-publication',
    loadChildren: (): Promise<QrjPublicationModule> =>
      import('./modules/qrj-publication').then(
        (mod) => mod.QrjPublicationModule
      ),
  },
  {
    path: 'services-page',
    loadChildren: (): Promise<ServicesPageModule> =>
      import('./modules/services-page').then((mod) => mod.ServicesPageModule),
  },
  {
    path: 'publications',
    loadChildren: (): Promise<PublicationsModule> =>
      import('./modules/publications').then((mod) => mod.PublicationsModule),
  },
  {
    path: 'partnership',
    loadChildren: (): Promise<PartnershipModule> =>
      import('./modules/partnership').then((mod) => mod.PartnershipModule),
  },
  {
    path: 'databases',
    loadChildren: (): Promise<DatabasesModule> =>
      import('./modules/databases').then((mod) => mod.DatabasesModule),
  },
  {
    path: 'about-us',
    loadChildren: (): Promise<AboutUsModule> =>
      import('./modules/about-us').then((mod) => mod.AboutUsModule),
  },
  {
    path: 'contact',
    loadChildren: (): Promise<ContactModule> =>
      import('./modules/contact').then((mod) => mod.ContactModule),
  },
  {
    path: 'home',
    loadChildren: (): Promise<HomeModule> =>
      import('./modules/home').then((mod) => mod.HomeModule),
  },
  {
    path: 'qrj',
    loadChildren: (): Promise<QrjModule> =>
      import('./modules/qrj').then((mod) => mod.QrjModule),
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
