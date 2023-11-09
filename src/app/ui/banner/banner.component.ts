import { Component, Input } from '@angular/core';

@Component({
  selector: 'mcd-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  @Input() imgUrl: string;

}
