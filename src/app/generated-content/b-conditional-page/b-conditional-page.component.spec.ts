import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BConditionalPageComponent } from './b-conditional-page.component';

describe('BConditionalPageComponent', () => {
  let component: BConditionalPageComponent;
  let fixture: ComponentFixture<BConditionalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BConditionalPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BConditionalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
