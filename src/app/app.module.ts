import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UiModule } from './ui/ui.module';
import { CatalogModule } from './catalog/catalog.module';
import { PageNotFoundComponent } from './other-pages/page-not-found/page-not-found.component';
import { ConditionsOfUseComponent } from './other-pages/conditions-of-use/conditions-of-use.component';
import { LegalNoticesComponent } from './other-pages/legal-notices/legal-notices.component';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { BackOfficeModule } from './back-office/back-office.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

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
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UiModule,
    BackOfficeModule,
    CatalogModule,
    AuthModule,

    ],
  exports: [
    UiModule,
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
