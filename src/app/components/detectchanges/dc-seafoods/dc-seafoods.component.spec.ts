import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcSeafoodsComponent } from './dc-seafoods.component';

describe('DcSeafoodsComponent', () => {
  let component: DcSeafoodsComponent;
  let fixture: ComponentFixture<DcSeafoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcSeafoodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DcSeafoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
