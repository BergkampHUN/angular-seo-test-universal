import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BSubPageComponent } from './b-sub-page.component';

describe('BSubPageComponent', () => {
  let component: BSubPageComponent;
  let fixture: ComponentFixture<BSubPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BSubPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BSubPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
