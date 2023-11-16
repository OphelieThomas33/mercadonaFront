import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDiscountComponent } from './add-discount.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductService } from '../product.service';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AddDiscountComponent', () => {
  let component: AddDiscountComponent;
  let fixture: ComponentFixture<AddDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDiscountComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule],
      providers: [
        ProductService,
        HttpClient,
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
