import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutreachComponent } from './outreach.component';
import { InstagramComponent } from './instagram/instagram.component';

const routes: Routes = [
  {
    path: '', component: OutreachComponent, children: [
      //{ path: '', component: InstagramComponent },
      { path: 'instagram', component: InstagramComponent, },
      {
        path: '',
        loadChildren: () => import(`../outreach/instagram/instagram.module`)
          .then(mod => mod.InstagramModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutreachRoutingModule { }