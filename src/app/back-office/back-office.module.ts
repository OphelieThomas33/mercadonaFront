import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeBackOfficeComponent } from './home-back-office/home-back-office.component';
import { CatalogModule } from '../catalog/catalog.module';
import { UiModule } from '../ui/ui.module';
import { AuthModule } from '../auth/auth.module';
import { ProductListBackOfficeComponent } from './product-list-back-office/product-list-back-office.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorComponent } from '../auth/interceptor/interceptor.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeBackOfficeComponent,
    UserProfileComponent,
    ProductListBackOfficeComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    UiModule,
    CatalogModule,
    AuthModule,
    RouterModule,

  ],
  exports: [
    HomeBackOfficeComponent,
    RouterModule,
  ],
  providers: [

    { provide: HTTP_INTERCEPTORS, useClass: InterceptorComponent, multi: true}
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
})
export class BackOfficeModule { }
