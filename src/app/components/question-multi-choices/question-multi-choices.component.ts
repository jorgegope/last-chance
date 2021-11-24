import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuestionMultiChoices } from 'src/app/model/question-multi-choices.class';
import { Question } from 'src/app/model/question.class';

@Component({
    selector: 'lc-question-multi-choices',
    templateUrl: './question-multi-choices.component.html',
    styleUrls: ['./question-multi-choices.component.scss']
})
export class QuestionMultiChoicesComponent implements OnInit {
    @Input() question: Question;

    @Output() sendAnswer = new EventEmitter<string | undefined>();

    answer: string | undefined;

    questionMultiChoice: QuestionMultiChoices;

    ngOnInit(): void {
        if (this.question.isQuestionMultiChoices()) {
            this.questionMultiChoice = this.question as QuestionMultiChoices;
        }
    }

    onSendAnswer() {
        if (this.answer) {
            this.sendAnswer.next(this.answer);
            this.answer = undefined;
        }
    }
}
