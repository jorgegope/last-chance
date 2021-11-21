import { Component, OnInit } from '@angular/core';
import { QuestionType } from 'src/app/model/question-type.enum';
import { Question } from 'src/app/model/question.class';

@Component({
    selector: 'lc-question-selector',
    templateUrl: './question-selector.component.html',
    styleUrls: ['./question-selector.component.scss'],
})
export class QuestionSelectorComponent {
    questions: Question[] = [
        {
            type: QuestionType.Input,
            text: 'What is the current year?',
            correctAnswer: 2021,
        },
        {
            type: QuestionType.Input,
            text: 'Do you like aliens?',
            correctAnswer: 'Yes',
        },
    ];

    currentQuestionIndex = 1;

    onSendAnswer(answer: string, answerIndex: number) {
        this.currentQuestionIndex++;
    }
}
