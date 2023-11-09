import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListBackOfficeComponent } from './product-list-back-office.component';

describe('ProductListBackOfficeComponent', () => {
  let component: ProductListBackOfficeComponent;
  let fixture: ComponentFixture<ProductListBackOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListBackOfficeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListBackOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
