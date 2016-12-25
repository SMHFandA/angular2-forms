import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { DynamicFormComponent } from './components/dynamic-form.component';
import { DynamicFormQuestionComponent } from './components/dynamic-form-question.component';

import { SimpleForm } from './components/simple-form/simple-form.component';

@NgModule({
  imports:      [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    SimpleForm
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
