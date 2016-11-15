import { Component } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { WordsService } from '../../services/words.service';

@Component({
    selector: 'my-words',
    templateUrl: 'components/words/words.component.html',
    styleUrls: ['components/words/words.component.css']
})
export class WordsComponent {
    name: string = "Words page";
    users: {};

    constructor(private wordsService: WordsService) {
    this.wordsService.getWords()
        .subscribe(words => {
          this.words = words;
        });
  }
}
