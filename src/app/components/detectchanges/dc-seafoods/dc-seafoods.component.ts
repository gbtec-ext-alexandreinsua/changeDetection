import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dc-seafoods',
  templateUrl: './dc-seafoods.component.html',
  styleUrls: ['./dc-seafoods.component.scss'],
})
export class DcSeafoodsComponent implements OnInit {
  seafoods = [
    { name: 'Velvet crab', price: this.getPrice() },
    { name: 'Mussels', price: this.getPrice() },
    { name: 'Barnacle', price: this.getPrice() },
  ];
  constructor() {}

  ngOnInit(): void {}

  addElement(name: string) {
    const newSeafood = { name, price: this.getPrice() };
    console.log(
      '%cADD SEAFOOD: ' + newSeafood.name + ' - €' + newSeafood.price,
      'background: tomato; color:white'
    );
    this.seafoods.push(newSeafood);
    // this.seafoods = [...this.seafoods, newSeafood];
  }
  getPrice(): number {
    return Math.round(Math.random() * 10000) / 100;
  }
}
