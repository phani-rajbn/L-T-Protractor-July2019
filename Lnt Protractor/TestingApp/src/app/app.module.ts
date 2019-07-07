import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { SimpleExampleComponent } from './Components/simple-example/simple-example.component';
import { CalcComponent } from './Components/calc/calc.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleExampleComponent,
    CalcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
