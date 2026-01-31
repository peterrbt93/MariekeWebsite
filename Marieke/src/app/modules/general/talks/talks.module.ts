import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TalksComponent } from './talks.component';
import { SafePipe } from './safe.pipe';
import { TalksRoutingModule } from './talks-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TalksRoutingModule
  ],
  exports: [
    TalksComponent
  ],
  declarations: [
    TalksComponent,
    SafePipe
  ],
  providers: [
  ],
})
export class TalksModule { }