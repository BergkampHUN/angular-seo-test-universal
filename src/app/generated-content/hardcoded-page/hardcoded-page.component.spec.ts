import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardcodedPageComponent } from './hardcoded-page.component';

describe('HardcodedPageComponent', () => {
  let component: HardcodedPageComponent;
  let fixture: ComponentFixture<HardcodedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardcodedPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardcodedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
