import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionMultiChoicesComponent } from './question-multi-choices.component';

describe('QuestionMultiChoicesComponent', () => {
  let component: QuestionMultiChoicesComponent;
  let fixture: ComponentFixture<QuestionMultiChoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionMultiChoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionMultiChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
