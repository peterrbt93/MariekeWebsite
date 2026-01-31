import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeachingComponent } from './teaching.component';

const routes: Routes = [
  {
    path: '', component: TeachingComponent, children: []
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachingRoutingModule { }