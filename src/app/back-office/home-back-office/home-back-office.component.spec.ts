import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBackOfficeComponent } from './home-back-office.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HomeBackOfficeComponent', () => {
  let component: HomeBackOfficeComponent;
  let fixture: ComponentFixture<HomeBackOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBackOfficeComponent ],
      imports: [HttpClientTestingModule],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBackOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
