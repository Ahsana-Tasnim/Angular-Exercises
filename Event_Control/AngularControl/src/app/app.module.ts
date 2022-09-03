import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextboxEventsComponent } from './textbox-events/textbox-events.component';
import { MouseEventsComponent } from './mouse-events/mouse-events.component';
import { SelectCheckRadioComponent } from './select-check-radio/select-check-radio.component';

@NgModule({
  declarations: [
    AppComponent,
    TextboxEventsComponent,
    MouseEventsComponent,
    SelectCheckRadioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
