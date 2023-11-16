import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountPageComponent } from './discount-page.component';
import { ProductService } from '../products/product.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('DiscountPageComponent', () => {
  let component: DiscountPageComponent;
  let fixture: ComponentFixture<DiscountPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountPageComponent ],
      imports: [HttpClientTestingModule],
      providers: [
        ProductService,
        HttpClient
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
