import { QuestionType } from './question-type.enum';
import { Question } from './question.class';

export class QuestionMultiChoices extends Question {

    choices: string[] = [];

    constructor(text: string, correctAnswer: number) {
        super(QuestionType.MultiChoices, text, correctAnswer);
        this.text = text;
        this.correctAnswer = correctAnswer;
    }
}
