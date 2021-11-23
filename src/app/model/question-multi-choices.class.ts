import { QuestionType } from './question-type.enum';
import { Question } from './question.class';

export class QuestionMultiChoices extends Question {

    choices: string[] = [];

    constructor(text: string, choices: string[], correctAnswer: number) {
        super(QuestionType.MultiChoices, text, correctAnswer);
        this.text = text;
        this.choices = choices;
        this.correctAnswer = correctAnswer;
    }
}
