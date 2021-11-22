import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuestionType } from 'src/app/model/question-type.enum';
import { Question } from 'src/app/model/question.class';

@Component({
    selector: 'lc-question-display',
    templateUrl: './question-display.component.html',
    styleUrls: ['./question-display.component.scss'],
})
export class QuestionDisplayComponent {
    @Input() question: Question;

    @Output() sendAnswer = new EventEmitter<string | number | undefined>();

    questionType = QuestionType;

    onSendAnswer(answer: string | number | undefined) {
        this.sendAnswer.next(answer);
    }
}
