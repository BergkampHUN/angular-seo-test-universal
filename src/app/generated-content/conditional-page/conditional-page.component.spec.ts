import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalPageComponent } from './conditional-page.component';

describe('ConditionalPageComponent', () => {
  let component: ConditionalPageComponent;
  let fixture: ComponentFixture<ConditionalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionalPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
