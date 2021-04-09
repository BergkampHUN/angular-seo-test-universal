import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RHardcodedPageComponent } from './r-hardcoded-page.component';

describe('RHardcodedPageComponent', () => {
  let component: RHardcodedPageComponent;
  let fixture: ComponentFixture<RHardcodedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RHardcodedPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RHardcodedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
