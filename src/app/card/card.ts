import {Component, Input} from '@angular/core';

@Component({
  selector: 'card',
  styleUrls: ['./card.css'],
  templateUrl: './card.html'
})
export class Card {
  @Input() titulo: string;
  @Input() descricao: string;
  @Input() imagem: string;
  @Input() link: string;
  @Input() cardClass: string;

}
