import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';

// ng modules
import {AutoCompleteModule, InputTextareaModule, InputTextModule} from 'primeng/primeng';


@NgModule({
  declarations: [
    AppComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InputTextModule,
    InputTextareaModule,
    AutoCompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
