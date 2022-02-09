import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcFishesChildComponent } from './dc-fishes-child.component';

describe('DcFishesChildComponent', () => {
  let component: DcFishesChildComponent;
  let fixture: ComponentFixture<DcFishesChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcFishesChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DcFishesChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
