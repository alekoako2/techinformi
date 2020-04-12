import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'
import { HomeModule } from './modules/home/home.module'
import { ScientificActivityModule } from './modules/scientific-activity/scientific-activity.module'
import { PublicationsModule } from './modules/publications/publications.module'
import { ResearchProjectModule } from './modules/research-project/research-project.module'
import { ExpertModule } from './modules/expert/expert.module'
import { QrjPublicationModule } from './modules/qrj-publication/qrj-publication.module'
import { DatabasesModule } from './modules/databases/databases.module'
import { QrjModule } from './modules/qrj/qrj.module'
import { ServicesPageModule } from './modules/services-page/services-page.module'
import { PartnershipModule } from './modules/partnership/partnership.module'
import { ContactModule } from './modules/contact/contact.module'
import { AboutUsModule } from './modules/about-us/about-us.module'

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: (): Promise<HomeModule> =>
      import('./modules/home/home.module').then((mod) => mod.HomeModule),
  },
  {
    path: 'about-us',
    loadChildren: (): Promise<AboutUsModule> =>
      import('./modules/about-us/about-us.module').then(
        (mod) => mod.AboutUsModule
      ),
  },
  {
    path: 'contact',
    loadChildren: (): Promise<ContactModule> =>
      import('./modules/contact/contact.module').then(
        (mod) => mod.ContactModule
      ),
  },
  {
    path: 'partnership',
    loadChildren: (): Promise<PartnershipModule> =>
      import('./modules/partnership/partnership.module').then(
        (mod) => mod.PartnershipModule
      ),
  },
  {
    path: 'services-page',
    loadChildren: (): Promise<ServicesPageModule> =>
      import('./modules/services-page/services-page.module').then(
        (mod) => mod.ServicesPageModule
      ),
  },
  {
    path: 'qrj',
    loadChildren: (): Promise<QrjModule> =>
      import('./modules/qrj/qrj.module').then((mod) => mod.QrjModule),
  },
  {
    path: 'databases',
    loadChildren: (): Promise<DatabasesModule> =>
      import('./modules/databases/databases.module').then(
        (mod) => mod.DatabasesModule
      ),
  },
  {
    path: 'qrj-publication',
    loadChildren: (): Promise<QrjPublicationModule> =>
      import('./modules/qrj-publication/qrj-publication.module').then(
        (mod) => mod.QrjPublicationModule
      ),
  },
  {
    path: 'scientists-experts',
    loadChildren: (): Promise<ExpertModule> =>
      import('./modules/expert/expert.module').then((mod) => mod.ExpertModule),
  },
  {
    path: 'research-project',
    loadChildren: (): Promise<ResearchProjectModule> =>
      import('./modules/research-project/research-project.module').then(
        (mod) => mod.ResearchProjectModule
      ),
  },
  {
    path: 'publications',
    loadChildren: (): Promise<PublicationsModule> =>
      import('./modules/publications/publications.module').then(
        (mod) => mod.PublicationsModule
      ),
  },
  {
    path: 'scientific-activity',
    loadChildren: (): Promise<ScientificActivityModule> =>
      import('./modules/scientific-activity/scientific-activity.module').then(
        (mod) => mod.ScientificActivityModule
      ),
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
