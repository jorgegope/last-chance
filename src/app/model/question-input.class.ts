import { QuestionType } from './question-type.enum';
import { Question } from './question.class';

export class QuestionInput extends Question {
    constructor(text: string, correctAnswer: string | number) {
        super(QuestionType.Input, text, correctAnswer);
        this.text = text;
        this.correctAnswer = correctAnswer;
    }
}
