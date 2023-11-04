import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountPageComponent } from './discount-page.component';

describe('DiscountPageComponent', () => {
  let component: DiscountPageComponent;
  let fixture: ComponentFixture<DiscountPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountPageComponent ]
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
