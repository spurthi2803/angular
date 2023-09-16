import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { DomComponent } from './dom/dom.component';
import { ToggleParagraphComponent } from './toggle-paragraph/toggle-paragraph.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    DomComponent,
    ToggleParagraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
