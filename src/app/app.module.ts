import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { QuestionDisplayComponent } from './components/question-display/question-display.component';
import { QuestionSelectorComponent } from './components/question-selector/question-selector.component';
import { QuestionInputComponent } from './components/question-input/question-input.component';
import { QuestionMultiChoicesComponent } from './components/question-multi-choices/question-multi-choices.component';

@NgModule({
    declarations: [
        AppComponent,
        QuestionDisplayComponent,
        QuestionSelectorComponent,
        QuestionInputComponent,
        QuestionMultiChoicesComponent,
    ],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
