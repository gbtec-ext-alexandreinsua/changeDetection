import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';

interface ISeafood {
  name: string;
  price: number;
}

@Component({
  selector: 'app-dc-seafoods-child',
  templateUrl: './dc-seafoods-child.component.html',
  styleUrls: ['./dc-seafoods-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DcSeafoodsChildComponent implements OnInit {
  @Input() data$?: Observable<ISeafood | null>;
  seafoods: ISeafood[] = [];

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.data$?.subscribe((newSeafood: ISeafood | null) => {
      if (newSeafood?.name) {
        newSeafood.price = this.retailPrice(newSeafood.name, newSeafood.price);
        this.seafoods.push(newSeafood);
        this.cd.detectChanges();
      }
    });
  }

  retailPrice(name: string, price: number) {
    console.log(
      '%cSeafood: ' + name + ' - ' + price,
      'background: tomato; color:white'
    );
    return Math.round(110 * price) / 100;
  }
}
