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
            text: 'Do you like machines?',
            correctAnswer: 'Yes',
        },
    ];

    currentQuestionIndex = 0;
    numberOfCorrectAnswers = 0;
    questionsAnswered = 0;

    onSendAnswer(answer: string | number | undefined, answerIndex: number) {
        debugger;
        this.currentQuestionIndex++;
        this.questionsAnswered++;
        this.questions[answerIndex].answer = answer;
        if (this.questions[answerIndex].correctAnswer === answer) {
            this.numberOfCorrectAnswers++;
        }
    }
}
