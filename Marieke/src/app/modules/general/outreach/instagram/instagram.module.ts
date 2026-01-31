import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstagramDOMService } from '../../../../instagram-dom.service';

import { InstagramRoutingModule } from './instagram-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InstagramRoutingModule
  ],
  providers: [InstagramDOMService]
})
export class InstagramModule { }
