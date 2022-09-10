import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CardsComponent } from './components/cards/cards.component';
import { SectionHeadersComponent } from './components/section-headers/section-headers.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CardsComponent,
    SectionHeadersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
