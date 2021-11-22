import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { QuestionDisplayComponent } from './components/question-display/question-display.component';
import { QuestionSelectorComponent } from './components/question-selector/question-selector.component';
import { QuestionInputComponent } from './components/question-input/question-input.component';

@NgModule({
    declarations: [
        AppComponent,
        QuestionDisplayComponent,
        QuestionSelectorComponent,
        QuestionInputComponent,
    ],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
