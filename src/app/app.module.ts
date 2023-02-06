import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextAreaCardComponent } from './text-area-card/text-area-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TextAreaCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
