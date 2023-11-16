import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListBackOfficeComponent } from './product-list-back-office.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductService } from 'src/app/catalog/products/product.service';
import { HttpClient } from '@angular/common/http';

describe('ProductListBackOfficeComponent', () => {
  let component: ProductListBackOfficeComponent;
  let fixture: ComponentFixture<ProductListBackOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListBackOfficeComponent ],
      imports: [HttpClientTestingModule],
      providers: [
        ProductService,
        HttpClient],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListBackOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ProductListBackOfficeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('LISTE DES PRODUITS EN LIGNE');
  });
});
