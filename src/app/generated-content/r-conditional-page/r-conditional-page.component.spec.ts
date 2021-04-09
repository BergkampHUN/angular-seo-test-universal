import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RConditionalPageComponent } from './r-conditional-page.component';

describe('RConditionalPageComponent', () => {
  let component: RConditionalPageComponent;
  let fixture: ComponentFixture<RConditionalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RConditionalPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RConditionalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
