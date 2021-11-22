import { QuestionType } from './question-type.enum';

export class Question {
    type: QuestionType;
    text: string;
    correctAnswer: string | number;
    answer?: string | number | undefined;

    constructor(
        type: QuestionType,
        text: string,
        correctAnswer: string | number,
    ) {
        this.type = type;
        this.text = text;
        this.correctAnswer = correctAnswer;
    }
}
