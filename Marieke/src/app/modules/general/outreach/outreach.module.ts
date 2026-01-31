import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutreachComponent } from './outreach.component';
import { OutreachRoutingModule } from './outreach-routing.module';

@NgModule({
  imports: [
    CommonModule,
    OutreachRoutingModule
  ],
  exports: [
    OutreachComponent
  ],
  declarations: [
    OutreachComponent
  ],
  providers: [
  ],
})
export class OutreachModule { }