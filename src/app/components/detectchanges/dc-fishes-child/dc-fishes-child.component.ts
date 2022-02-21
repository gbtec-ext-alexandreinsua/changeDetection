import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-dc-fishes-child',
  templateUrl: './dc-fishes-child.component.html',
  styleUrls: ['./dc-fishes-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DcFishesChildComponent implements OnInit {
  @Input() data: { name: string; price: number }[] = [];

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngOnChanges(): void {}

  retailPrice(price: number) {
    console.log('%cFish: ' + price, 'background: dodgerblue; color:white');
    return Math.round(110 * price) / 100;
    this.cd.detectChanges();
  }
}
