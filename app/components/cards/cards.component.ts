import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordsService } from '../../services/words.service';

@Component({
    selector: 'my-cards',
    templateUrl: 'components/cards/cards.component.html',
    styleUrls: ['components/cards/cards.component.css']
})
export class CardsComponent {
  english: string;
  ukrainian: string;
  _id: string;
  number: number;

    constructor(private _elRef: ElementRef, private wordsService: WordsService) {
    this.wordsService.getWords()
        .subscribe(words => {
          this.number = Math.floor(Math.random() * words.length)
          this.words = words
          this.english = this.words[this.number].english
          this.ukrainian = this.words[this.number].ukrainian
        });
  }
}
