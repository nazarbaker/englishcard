import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'my-cards',
    templateUrl: 'components/cards/cards.component.html',
    styleUrls: ['components/cards/cards.component.css']
})
export class CardsComponent {
    name: string = "Cards About Us";
    param: string;

    constructor(private params: ActivatedRoute) {
        params.params
            .subscribe((data: { id?: string}) => this.param = data.id);
    }
}
