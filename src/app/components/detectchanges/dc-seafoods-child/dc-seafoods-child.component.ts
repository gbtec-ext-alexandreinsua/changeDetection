import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-dc-seafoods-child',
  templateUrl: './dc-seafoods-child.component.html',
  styleUrls: ['./dc-seafoods-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DcSeafoodsChildComponent implements OnInit {
  @Input() data: { name: string; price: number }[] = [];
  constructor() {}

  ngOnInit(): void {}

  retailPrice(price: number) {
    console.log('%cSeafood: ' + price, 'background: tomato; color:white');
    return Math.round(110 * price) / 100;
  }
}
