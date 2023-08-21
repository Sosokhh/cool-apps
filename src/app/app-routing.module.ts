import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClockComponent} from "./list-components/clock/clock.component";
import {KeyCodesComponent} from "./list-components/key-codes/key-codes.component";
import {ChoicePickerComponent} from "./list-components/choice-picker/choice-picker.component";
import {HomeComponent} from "./home-components/home.component";

const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'clock', component: ClockComponent},
  { path: 'key-codes', component: KeyCodesComponent },
  { path: 'choice-picker', component: ChoicePickerComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
