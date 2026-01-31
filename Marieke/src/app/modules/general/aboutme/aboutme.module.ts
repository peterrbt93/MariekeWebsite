import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMeComponent } from './aboutme.component';
import { aboutmeRoutingModule } from './aboutme-routing.module';
import { SanitizedHtmlPipe } from './sanitized-html.pipe';

@NgModule({
  imports: [
    CommonModule,
    aboutmeRoutingModule
  ],
  exports: [
    AboutMeComponent
  ],
  declarations: [
    AboutMeComponent,
    SanitizedHtmlPipe
  ],
  providers: [
  ],
})
export class AboutmeModule { }