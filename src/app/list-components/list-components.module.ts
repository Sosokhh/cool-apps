import {NgModule} from "@angular/core";
import {ClockComponent} from "./clock/clock.component";
import {KeyCodesComponent} from "./key-codes/key-codes.component";
import {ChoicePickerComponent} from "./choice-picker/choice-picker.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    ClockComponent,
    KeyCodesComponent,
    ChoicePickerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ClockComponent,
    KeyCodesComponent,
    ChoicePickerComponent
  ]
})
export class ListComponentsModule {}
