import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BHardcodedPageComponent } from './b-hardcoded-page.component';

describe('BHardcodedPageComponent', () => {
  let component: BHardcodedPageComponent;
  let fixture: ComponentFixture<BHardcodedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BHardcodedPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BHardcodedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
