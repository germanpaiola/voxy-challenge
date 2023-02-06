import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAreaCardComponent } from './text-area-card.component';

describe('TextAreaCardComponent', () => {
  let component: TextAreaCardComponent;
  let fixture: ComponentFixture<TextAreaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextAreaCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextAreaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
