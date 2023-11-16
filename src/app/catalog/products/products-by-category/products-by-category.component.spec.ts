import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsByCategoryComponent } from './products-by-category.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ProductsByCategoryComponent', () => {
  let component: ProductsByCategoryComponent;
  let fixture: ComponentFixture<ProductsByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsByCategoryComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
