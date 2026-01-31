import { Component } from '@angular/core';

import { Input, OnInit } from '@angular/core';
import { InstagramDOMService } from '../../../../instagram-dom.service';
import { fade } from '../../../../animations';


@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss'],
  animations: [
    fade
  ]
})
export class InstagramComponent implements OnInit  {
  constructor(private instagram: InstagramDOMService) {}

  ngOnInit() {
    this.instagram.processEmbeddedInstagramPosts();
    (<any>window).twttr.widgets.load();
  }

}
