import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

import { CatalogModule } from './catalog/catalog.module';
import { UiModule } from './ui/ui.module';
import { PageNotFoundComponent } from './other-pages/page-not-found/page-not-found.component';
import { ConditionsOfUseComponent } from './other-pages/conditions-of-use/conditions-of-use.component';
import { LegalNoticesComponent } from './other-pages/legal-notices/legal-notices.component';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { HttpXsrfInterceptorService } from './auth/interceptors/http-xsrf-interceptor/http-xsrf-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ConditionsOfUseComponent,
    LegalNoticesComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CatalogModule,
    UiModule,
    AuthModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'csrftoken'
    }),

    ],
  exports: [
    UiModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: HttpXsrfInterceptorService, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
