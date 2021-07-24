import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentCardComponent } from './components/student-card/student-card.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FcCheckboxComponent } from './components/fc-checkbox/fc-checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentCardComponent,
    FcCheckboxComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
