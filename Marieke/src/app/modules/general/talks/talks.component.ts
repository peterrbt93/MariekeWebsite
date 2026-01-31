
import { SeoService } from '../../../services/seo/seo.service';
import { fade } from '../../../animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Item } from './items/item';
import { Badge } from './badge';
import { ItemsService } from './items/items.service';
import { environment } from '../../../../environments/environment';


// eslint-disable-next-line
declare const bootstrap: any;
@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.scss'],
  animations: [
    fade
  ]
})
export class TalksComponent {

  itemsLoaded: boolean;
  items: Item[];
  badges: Badge[];
  searchField: string;
  player: string;
  playerLoaded: boolean;
  // eslint-disable-next-line
  modalPlayer: any;
  loaded: boolean;
  filtersEnabled: boolean;
  resultsFound: boolean;


  constructor(private seoService: SeoService, public router: Router,
    private itemsService: ItemsService,
    private fb: FormBuilder) {

    const content = 'Marieke - Talks';
    const title = 'Marieke - Talks';

    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);

    this.loaded = false;
    this.items = [];
    this.badges = [];
    this.itemsLoaded = false;
    this.searchField = ''
    this.player = '';
    this.playerLoaded = false;
    this.filtersEnabled = false;
    this.resultsFound = false;

  }



  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.loaded = false;
    const url = environment.urlMovies;
    this.itemsService.getItems(url)
      .subscribe(
        items => {
          this.items = items;
          this.loaded = true;
        }
      );
  }

  openTrailer(link: any, isYoutube: boolean) {
    if (isYoutube && link != null) {
      this.player = link;
      this.playerLoaded = true;
      if (this.modalPlayer === undefined) {
        this.modalPlayer = new bootstrap.Modal(document.getElementById('newsModal'), {
          keyboard: true
        })
        const selectPlayer = document.getElementById('newsModal')
        selectPlayer?.addEventListener('hidden.bs.modal', this.onCloseModal.bind(this));
      }
      this.modalPlayer?.show();
    }

    if (!isYoutube && link != null) {
      window.open(link, '_blank')?.focus();
    }
    
  }

  onCloseModal() {
    this.player = '';
    this.playerLoaded = false;
  }

  onHandleKeyDown(event: any) {
    if (event.keyCode === 13) {
      this.onSearch();
    }
  }

  onSearch() {
    this.getItems();
  }

}


