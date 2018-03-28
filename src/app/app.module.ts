import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { DisplayComponent } from './components/display/display.component';
import { LandingComponent } from './components/landing/landing.component';

import { GithubService } from './services/github.service';


@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
