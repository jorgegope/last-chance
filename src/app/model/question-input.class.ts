import { QuestionType } from './question-type.enum';
import { Question } from './question.class';

export class QuestionInput extends Question {
    constructor(text: string, correctAnswer: number) {
        super(QuestionType.Calculation, text, correctAnswer);
        this.text = text;
        this.correctAnswer = correctAnswer;
    }
}
