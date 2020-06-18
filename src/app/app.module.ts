import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './comps/calculator/calculator.component';
import { HistoryComponent } from './comps/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
