import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ActionCardsPoolService } from '../shared/action-cards-pool.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  suscription: Subscription;
  cannotDraw = true;
  cannotReset = true;
  cards;

  card = {
    name: '',
    desc: '',
    image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f22df3f7-9659-4614-88e3-f56612c945bb/d9m18r3-c007a932-d2b5-47e1-9018-8522d974fa8f.png/v1/fill/w_400,h_584,q_80,strp/yu_gi_oh__arc_v_tcg_action_card_back_by_aaiki_d9m18r3-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTg0IiwicGF0aCI6IlwvZlwvZjIyZGYzZjctOTY1OS00NjE0LTg4ZTMtZjU2NjEyYzk0NWJiXC9kOW0xOHIzLWMwMDdhOTMyLWQyYjUtNDdlMS05MDE4LTg1MjJkOTc0ZmE4Zi5wbmciLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.03gDc1CARSrUvDGQFcuYLV1ocnsnt2PaV2dBXw26cXU'
  }

  constructor(private actionCardsPoolService: ActionCardsPoolService) {

  }

  ngOnInit(): void {
    // ESTA ES LA SOLUCIÓN LLAMANDO AL SERVICIO DESDE EL INIT
    this.suscription = this.actionCardsPoolService.getCards().subscribe(
      (cards) => {
        this.cannotDraw = false;
        this.cards = cards['data'];
      }
    )
  }

  onClickDraw(){
    // ESTA ES LA SOLUCIÓN LLAMANDO AL SERVICIO DESDE EL INIT
    let cardIndex = Math.floor(Math.random() * this.cards.length) + 1;
    this.card = this.cards[cardIndex];
    this.card.image = this.cards[cardIndex]['card_images'][0].image_url;
    this.cannotReset = false;

    // ESTA ES LA SOLUCIÓN USANDO SERVICIOS SOLO EN EL BOTÓN
    // this.suscription = this.actionCardsPoolService.getRandomCard().subscribe(
    //   (card) => {
    //     this.card = card['data'][0];
    //     this.card.image = card['data'][0]['card_images'][0].image_url;
    //     return this.card;
    //   }
    // );

    // ESTA ES LA SOLUCIÓN SIN USAR SERVICIOS
    // this.card = this.actionCardsPoolService.getRandomCard();
    // return this.card;
  }

  onReset(){
    this.card = {
      name: '',
      desc: '',
      image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f22df3f7-9659-4614-88e3-f56612c945bb/d9m18r3-c007a932-d2b5-47e1-9018-8522d974fa8f.png/v1/fill/w_400,h_584,q_80,strp/yu_gi_oh__arc_v_tcg_action_card_back_by_aaiki_d9m18r3-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTg0IiwicGF0aCI6IlwvZlwvZjIyZGYzZjctOTY1OS00NjE0LTg4ZTMtZjU2NjEyYzk0NWJiXC9kOW0xOHIzLWMwMDdhOTMyLWQyYjUtNDdlMS05MDE4LTg1MjJkOTc0ZmE4Zi5wbmciLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.03gDc1CARSrUvDGQFcuYLV1ocnsnt2PaV2dBXw26cXU'
    }
    this.suscription.unsubscribe();
  }

}
