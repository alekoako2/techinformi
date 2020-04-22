import {
  HashLocationStrategy,
  LocationStrategy,
  registerLocaleData,
} from '@angular/common'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import localeKaExtra from '@angular/common/locales/extra/ka'
import localeKa from '@angular/common/locales/ka'

registerLocaleData(localeKa, 'ka', localeKaExtra)

// NPM Modules
import { SlickCarouselModule } from 'ngx-slick-carousel'
import { FlexLayoutModule } from '@angular/flex-layout'

// Modules
import { AppRoutingModule } from './app-routing.module'
import { GraphQLModule } from './graphql.module'
import { HeaderModule } from './modules/shared/modules/header'
import { FooterModule } from './modules/shared/modules/footer'
import { SharedModule } from '@shared'

// Components
import { AppComponent } from './app.component'
import { RouteReuseStrategy } from '@angular/router'
import { CustomReuseStrategy } from './router-strategy'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    SlickCarouselModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    GraphQLModule,
    SharedModule,
    HeaderModule,
    FooterModule,
  ],
  providers: [
    {
      useClass: HashLocationStrategy,
      provide: LocationStrategy,
    },
    {
      provide: RouteReuseStrategy,
      useClass: CustomReuseStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
