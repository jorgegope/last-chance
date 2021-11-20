import { QuestionType } from './question-type.enum';
import { Question } from './question.class';

export class QuestionCalculation extends Question {
    constructor(text: string, correctAnswer: number) {
        super(QuestionType.Calculation, text, correctAnswer);
        this.correctAnswer = correctAnswer;
    }
}
