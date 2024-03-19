import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MbscModule, mobiscroll } from '../lib/mobiscroll/js/mobiscroll.angular2.min.js';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MbscModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
export { mobiscroll }

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/