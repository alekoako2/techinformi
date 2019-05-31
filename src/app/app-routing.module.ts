import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import( './modules/pages/home/home.module').then(mod => mod.HomeModule)},
  {path: 'auth', loadChildren: () => import( './core/authentication/authentication.module').then(mod => mod.AuthenticationModule)},
  {path: 'about-us', loadChildren: () => import( './modules/pages/about-us/about-us.module').then(mod => mod.AboutUsModule)},
  {path: 'account', loadChildren: () => import( './modules/pages/account/account.module').then(mod => mod.AccountModule)},
  {path: 'contact', loadChildren: () => import( './modules/pages/contact/contact.module').then(mod => mod.ContactModule)},
  {path: 'faq', loadChildren: () => import( './modules/pages/faq/faq.module').then(mod => mod.FaqModule)},
  {path: 'partnership', loadChildren: () => import( './modules/pages/partnership/partnership.module').then(mod => mod.PartnershipModule)},
  {
    path: 'product-details',
    loadChildren: () => import( './modules/pages/product-details/product-details.module').then(mod => mod.ProductDetailsModule)
  },
  {
    path: 'publications',
    loadChildren: () => import( './modules/pages/publications/publications.module').then(mod => mod.PublicationsModule)
  },
  {path: 'qrj', loadChildren: () => import( './modules/pages/qrj/qrj.module').then(mod => mod.QrjModule)},
  {
    path: 'scientific-activity',
    loadChildren: () => import( './modules/pages/scientific-activity/scientific-activity.module').then(mod => mod.ScientificActivityModule)
  },
  {path: 'services', loadChildren: () => import( './modules/pages/services/services.module').then(mod => mod.ServicesModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
