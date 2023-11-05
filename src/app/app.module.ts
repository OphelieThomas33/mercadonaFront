import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { CatalogModule } from './catalog/catalog.module';
import { UiModule } from './ui/ui.module';
import { PageNotFoundComponent } from './other-pages/page-not-found/page-not-found.component';
import { ConditionsOfUseComponent } from './other-pages/conditions-of-use/conditions-of-use.component';
import { LegalNoticesComponent } from './other-pages/legal-notices/legal-notices.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ConditionsOfUseComponent,
    LegalNoticesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CatalogModule,
    UiModule,

    ],
  exports: [
    UiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
