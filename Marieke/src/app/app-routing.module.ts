import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/general/home/home.component';
import { AboutMeComponent } from './modules/general/aboutme/aboutme.component';
import { OutreachComponent } from './modules/general/outreach/outreach.component';


const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'about', component: AboutMeComponent, },
  { path: 'outreach', 
        // component: outreachComponent, 
        loadChildren: () => import('./modules/general/outreach/outreach.module')
        .then(mod => mod.OutreachModule) 
      },
  {
    path: 'publications',
    loadChildren: () => import('./modules/general/publications/publications.module')
      .then(mod => mod.PublicationsModule)
  },
  {
    path: 'talks',
    loadChildren: () => import('./modules/general/talks/talks.module')
      .then(mod => mod.TalksModule)
  },
  {
    path: 'teaching',
    loadChildren: () => import('./modules/general/teaching/teaching.module')
      .then(mod => mod.TeachingModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // initialNavigation: 'enabledBlocking'
    useHash: false,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'    
})],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }