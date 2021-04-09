import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RObservablePageComponent } from './r-observable-page.component';

describe('RObservablePageComponent', () => {
  let component: RObservablePageComponent;
  let fixture: ComponentFixture<RObservablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RObservablePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RObservablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
