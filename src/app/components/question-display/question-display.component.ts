import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuestionType } from 'src/app/model/question-type.enum';

@Component({
    selector: 'lc-question-display',
    templateUrl: './question-display.component.html',
    styleUrls: ['./question-display.component.scss'],
})
export class QuestionDisplayComponent {
    @Input() type: QuestionType = 0;
    @Input() text = '';

    @Output() sendAnswer = new EventEmitter<string>();

    questionType = QuestionType;

    onSendAnswer(answer: string) {
        this.sendAnswer.next(answer);
    }
}
