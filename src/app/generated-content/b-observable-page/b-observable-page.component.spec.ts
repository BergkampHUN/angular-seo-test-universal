import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BObservablePageComponent } from './b-observable-page.component';

describe('BObservablePageComponent', () => {
  let component: BObservablePageComponent;
  let fixture: ComponentFixture<BObservablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BObservablePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BObservablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
