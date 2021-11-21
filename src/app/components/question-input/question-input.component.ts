import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'lc-question-input',
    templateUrl: './question-input.component.html',
    styleUrls: ['./question-input.component.scss'],
})
export class QuestionInputComponent {
    @Input() text = '';

    @Output() sendAnswer = new EventEmitter<string>();

    answer = '';

    onSendAnswer() {
        console.log(this.answer);
        this.sendAnswer.next(this.answer);
    }
}
