import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutMeComponent } from './aboutme.component';

const routes: Routes = [
  {
    path: '', component: AboutMeComponent, children: [
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class aboutmeRoutingModule { }