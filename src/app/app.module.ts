import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FooterBackToTopComponent } from './core/footer/components/footer-back-to-top/footer-back-to-top.component'
import { NotFoundComponent } from './shared/components/not-found/not-found.component'
import { FooterComponent } from './core/footer/components/footer/footer.component'
import { FooterToolbarComponent } from './core/footer/components/footer-toolbar/footer-toolbar.component'
import { MaterialModule } from './shared/modules/material/material.module'
import { HeaderModule } from './core/header/header.module'
import { HideMissingLanguageElementModule } from './shared/modules/hide-missing-language-element/hide-missing-language-element.module'
import { SlickCarouselModule } from 'ngx-slick-carousel'
import { FlexLayoutModule } from '@angular/flex-layout'
import {
  HashLocationStrategy,
  LocationStrategy,
  registerLocaleData,
} from '@angular/common'
import localeKa from '@angular/common/locales/ka'
import localeKaExtra from '@angular/common/locales/extra/ka'
import { GraphQLModule } from './graphql.module'
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin'
import { environment } from '../environments/environment'

registerLocaleData(localeKa, 'ka', localeKaExtra)

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NotFoundComponent,
    FooterBackToTopComponent,
    FooterToolbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule,
    SlickCarouselModule,
    AppRoutingModule,
    HeaderModule,
    HideMissingLanguageElementModule,
    GraphQLModule,
    NgxsReduxDevtoolsPluginModule.forRoot({ disabled: environment.production }),
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
