import {NgModule} from "@angular/core";
import {AppComponent} from "../app.component";
import {DadJokesComponent} from "./dad-jokes/dad-jokes.component";
import {BackgroundBoxesComponent} from "./background-boxes/background-boxes.component";
import {DrinkWaterComponent} from "./drink-water/drink-water.component";
import {HoverboardComponent} from "./hoverboard/hoverboard.component";
import {DragNDropComponent} from "./drag-n-drop/drag-n-drop.component";
import {DrawingAppComponent} from "./drawing-app/drawing-app.component";
import {AppRoutingModule} from "../app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    DadJokesComponent,
    BackgroundBoxesComponent,
    DrinkWaterComponent,
    HoverboardComponent,
    DragNDropComponent,
    DrawingAppComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    DadJokesComponent,
    BackgroundBoxesComponent,
    DrinkWaterComponent,
    HoverboardComponent,
    DragNDropComponent,
    DrawingAppComponent,
  ],
  bootstrap: [AppComponent]
})

export class HomeComponentsModule {}
