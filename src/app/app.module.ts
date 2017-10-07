import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SampleComponent } from 'vijay';

import { AppComponent } from './app.component';
import { HeroDetailsComponent } from './hero-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SampleComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
