import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcFishesComponent } from './dc-fishes.component';

describe('DcFishesComponent', () => {
  let component: DcFishesComponent;
  let fixture: ComponentFixture<DcFishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcFishesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DcFishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
