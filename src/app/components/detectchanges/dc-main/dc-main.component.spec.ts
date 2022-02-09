import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcMainComponent } from './dc-main.component';

describe('DcMainComponent', () => {
  let component: DcMainComponent;
  let fixture: ComponentFixture<DcMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DcMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
