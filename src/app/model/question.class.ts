import { QuestionInput } from './question-input.class';
import { QuestionMultiChoices } from './question-multi-choices.class';
import { QuestionType } from './question-type.enum';

export abstract class Question {
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

    isQuestionInput(): this is QuestionInput {
        return this.type === QuestionType.Input;
    }

    isQuestionMultiChoices(): this is QuestionMultiChoices {
        return this.type === QuestionType.MultiChoices;
    }
}
