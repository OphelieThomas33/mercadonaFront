import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DiscountPageComponent } from '../catalog/discount-page/discount-page.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const headerRoutes: Routes = [
  { path: 'catalogue', redirectTo: ''},
  { path: 'promotions', component: DiscountPageComponent},
]

@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forChild(headerRoutes),
  ],
  exports: [
    HeaderComponent,
    BannerComponent,
    FooterComponent,
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
})
export class UiModule { }
