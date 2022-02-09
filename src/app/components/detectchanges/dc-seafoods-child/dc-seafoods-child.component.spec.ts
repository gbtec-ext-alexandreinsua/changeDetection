import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcSeafoodsChildComponent } from './dc-seafoods-child.component';

describe('DcSeafoodsChildComponent', () => {
  let component: DcSeafoodsChildComponent;
  let fixture: ComponentFixture<DcSeafoodsChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcSeafoodsChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DcSeafoodsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
