import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionSelectorComponent } from './question-selector.component';

describe('QuestionSelectorComponent', () => {
  let component: QuestionSelectorComponent;
  let fixture: ComponentFixture<QuestionSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
