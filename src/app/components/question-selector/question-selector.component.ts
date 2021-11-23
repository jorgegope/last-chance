import { Component, OnInit } from '@angular/core';
import { QuestionInput } from 'src/app/model/question-input.class';
import { QuestionMultiChoices } from 'src/app/model/question-multi-choices.class';
import { QuestionType } from 'src/app/model/question-type.enum';
import { Question } from 'src/app/model/question.class';

@Component({
    selector: 'lc-question-selector',
    templateUrl: './question-selector.component.html',
    styleUrls: ['./question-selector.component.scss'],
})
export class QuestionSelectorComponent implements OnInit {
    questions: Question[] = [
        new QuestionMultiChoices('12 / 4 =', ['4', '3', '5'], 1),
        new QuestionInput('What is the current year?', 2021),
        new QuestionInput('Do you like machines?', 'Yes'),
        new QuestionInput(
            'What is the surname of the leading creator of relativity theory called Albert?',
            'Einstein',
        ),
    ];

    currentQuestionIndex = 0;
    numberOfCorrectAnswers = 0;
    questionsAnswered = 0;

    ngOnInit(): void {}

    onSendAnswer(answer: string | number | undefined, answerIndex: number) {
        this.currentQuestionIndex++;
        this.questionsAnswered++;
        this.questions[answerIndex].answer = answer;
        if (this.questions[answerIndex].correctAnswer === answer) {
            this.numberOfCorrectAnswers++;
        }
    }
}
