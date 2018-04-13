import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';


@NgModule({
  declarations: [
    AppComponent,
    ComingSoonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
