import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';


describe('ProductService', () => {
  let httpTestingController: any;
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
      ],
      providers: [ProductService]
    });
    service = TestBed.inject(ProductService);
    httpTestingController = TestBed.inject(httpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
