import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachingComponent } from './teaching.component';
import { TeachingRoutingModule } from './teaching-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TeachingRoutingModule
  ],
  exports: [
    TeachingComponent
  ],
  declarations: [
    TeachingComponent
  ],
  providers: [
  ],
})
export class TeachingModule { }