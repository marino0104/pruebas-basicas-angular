import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { operacionesBasicas } from './src/components/test-exercise/test-exercise.component';

@NgModule({
  declarations: [
    AppComponent,
    operacionesBasicas
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
