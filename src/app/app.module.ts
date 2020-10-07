import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestExerciseComponent } from './src/components/test-exercise/test-exercise.component';

@NgModule({
  declarations: [
    AppComponent,
    TestExerciseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
