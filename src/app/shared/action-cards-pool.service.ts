import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  map,
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActionCardsPoolService {

  constructor(private http: HttpClient) { }

  // card = {
  //   name: 'Stardust Dragon',
  //   desc: 'When a card or effect is activated that would destroy a card(s) on the field (Quick Effect): You can Tribute this card; negate the activation, and if you do, destroy it. During the End Phase, if this effect was activated this turn (and was not negated): You can Special Summon this card from your GY.',
  //   image: 'https://storage.googleapis.com/ygoprodeck.com/pics/44508094.jpg'
  // }

  // getRandomCard(){
  //   return this.card;
  // }

  getRandomCard(): Observable<any>{
    return this.http.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?id=8949584)')
      .pipe(
        map(cards => {
          return cards;
        })
      );
  }

  getCards() {
    return this.http.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
      .pipe(
        map(cards => {
          return cards;
        })
      );
  }
}
