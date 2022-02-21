import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface ISeafood {
  name: string;
  price: number;
}
@Component({
  selector: 'app-dc-seafoods',
  templateUrl: './dc-seafoods.component.html',
  styleUrls: ['./dc-seafoods.component.scss'],
})
export class DcSeafoodsComponent implements OnInit {
  seafoods: ISeafood[] = [
    { name: 'Velvet crab', price: this.getPrice() },
    { name: 'Mussels', price: this.getPrice() },
    { name: 'Barnacle', price: this.getPrice() },
  ];

  seafoods$ = new BehaviorSubject<ISeafood | null>(null);
  constructor() {}

  ngOnInit(): void {
    this.seafoods.forEach((s) => {
      setTimeout(() => {
        this.seafoods$.next(s);
      });
    });
  }

  addElement(name: string) {
    const newSeafood = { name, price: this.getPrice() };
    console.log(
      '%cADD SEAFOOD: ' + newSeafood.name + ' - €' + newSeafood.price,
      'background: tomato; color:white'
    );
    this.seafoods$.next(newSeafood);
  }
  getPrice(): number {
    return Math.round(Math.random() * 10000) / 100;
  }
}
