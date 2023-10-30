import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { BannerComponent } from './banner/banner.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DiscountPageComponent } from './discount-page/discount-page.component';
import { CatalogModule } from './catalog/catalog.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    BannerComponent,
    DiscountPageComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CatalogModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
