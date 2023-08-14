import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ClockComponent} from './clock/clock.component';
import {KeyCodesComponent} from './key-codes/key-codes.component';
import { DadJokesComponent } from './dad-jokes/dad-jokes.component';
import {HttpClientModule} from "@angular/common/http";
import { ChoicePickerComponent } from './choice-picker/choice-picker.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClockComponent,
    KeyCodesComponent,
    DadJokesComponent,
    ChoicePickerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
