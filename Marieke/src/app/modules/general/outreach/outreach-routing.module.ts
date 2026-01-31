import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { outreachComponent } from './outreach.component';
import { instagramComponent } from './instagram/instagram.component';

const routes: Routes = [
  {
    path: '', component: outreachComponent, children: [
      //{ path: '', component: instagramComponent },
      { path: 'instagram', component: instagramComponent, },
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
export class outreachRoutingModule { }