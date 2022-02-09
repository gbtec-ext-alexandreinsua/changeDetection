import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dc-fishes',
  templateUrl: './dc-fishes.component.html',
  styleUrls: ['./dc-fishes.component.scss'],
})
export class DcFishesComponent implements OnInit {
  fishes = [
    { name: 'Cod', price: this.getPrice() },
    { name: 'Permit', price: this.getPrice() },
    { name: 'Hake', price: this.getPrice() },
  ];

  constructor() {}

  ngOnInit(): void {}

  addElement(name: string) {
    const newFish = { name, price: this.getPrice() };
    console.log(
      '%cADD FISH: ' + newFish.name + ' - €' + newFish.price,
      'background: dodgerblue; color:white'
    );
    this.fishes.push(newFish);
    // this.fishes = [...this.fishes, newFish]
  }

  getPrice(): number {
    return Math.round(Math.random() * 10000) / 100;
  }
}
