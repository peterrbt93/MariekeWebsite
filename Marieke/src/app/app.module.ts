import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/general/home/home.component';

import { HeaderModule } from './components/header/header.module';
import { FooterModule } from './components/footer/footer.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { InstagramDOMService } from './instagram-dom.service';
import { RouterModule } from '@angular/router';
import { OutreachModule } from './modules/general/outreach/outreach.module';
import { TalksModule } from './modules/general/talks/talks.module';
import { TeachingModule } from './modules/general/teaching/teaching.module';
import { PublicationsModule } from './modules/general/publications/publications.module';
import { AboutmeModule } from './modules/general/aboutme/aboutme.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    HttpClientModule,
    HeaderModule,
    FooterModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    RouterModule,
    OutreachModule,
    TalksModule,
    TeachingModule,
    PublicationsModule,
    AboutmeModule
  ],
  exports: [MatToolbarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }