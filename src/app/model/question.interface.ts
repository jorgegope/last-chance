import { QuestionType } from "./question-type.enum"

export interface Question {
    type: QuestionType
    text: string
    choices?: string[]
    correctAnswer?: string
    correctChoiceIndex?: number
}
