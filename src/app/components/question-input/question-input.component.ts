import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuestionInput } from 'src/app/model/question-input.class';

@Component({
    selector: 'lc-question-input',
    templateUrl: './question-input.component.html',
    styleUrls: ['./question-input.component.scss'],
})
export class QuestionInputComponent {
    @Input() question: QuestionInput;

    @Output() sendAnswer = new EventEmitter<string | number | undefined>();

    answer: string | number | undefined;

    onSendAnswer() {
        console.log(this.answer);
        if (this.answer) {
            this.sendAnswer.next(this.answer);
            this.answer = undefined;
        }
    }

    isNumber(): boolean {
        return typeof this.question.correctAnswer === 'number';
    }
}
