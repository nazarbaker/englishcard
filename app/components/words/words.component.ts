import { Component } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
    selector: 'my-words',
    templateUrl: 'components/words/words.component.html',
    styleUrls: ['components/words/words.component.css']
})
export class WordsComponent {
    name: string = "Words page";
    users: {};

    constructor(http: Http) {
        http.get("/users")
            .map(data => data.json())
            .subscribe((data) => this.users = data);
    }
}
