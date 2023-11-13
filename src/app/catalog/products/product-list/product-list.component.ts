import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '../product';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'mcd-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {

  envUrl : any = environment.apiUrl;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() products: Product[];


}
