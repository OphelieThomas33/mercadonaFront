import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DiscountPageComponent } from '../catalog/discount-page/discount-page.component';
import { RouterModule, Routes } from '@angular/router';

const headerRoutes: Routes = [
  { path: 'catalogue', redirectTo: ''},
  { path: 'promotions', component: DiscountPageComponent},
]

@NgModule({
  declarations: [
    BannerComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(headerRoutes),
  ],
  exports: [
    BannerComponent,
    HeaderComponent,
    FooterComponent,
  ]
})
export class UiModule { }
