import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RSubPageComponent } from './r-sub-page.component';

describe('RSubPageComponent', () => {
  let component: RSubPageComponent;
  let fixture: ComponentFixture<RSubPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RSubPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RSubPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
