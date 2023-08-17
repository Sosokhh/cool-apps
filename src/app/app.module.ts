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
import { BackgroundBoxesComponent } from './background-boxes/background-boxes.component';
import { DrinkWaterComponent } from './drink-water/drink-water.component';
import { HoverboardComponent } from './hoverboard/hoverboard.component';
import { DragNDropComponent } from './drag-n-drop/drag-n-drop.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClockComponent,
    KeyCodesComponent,
    DadJokesComponent,
    ChoicePickerComponent,
    BackgroundBoxesComponent,
    DrinkWaterComponent,
    HoverboardComponent,
    DragNDropComponent,
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
