import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    styles: [`h1 {
        color: white;
        background: darkgray;
        padding: 20px;
    }`],
    template: `
    <div class="wrapper">
      <h1>{{name}}</h1>
      <a [routerLink]="['/']">Words</a> | <a [routerLink]="['/cards/']">Cards</a>
      <hr />
      <router-outlet></router-outlet>
    </div>`,

})
export class AppComponent {
    name: string = 'Flashcards';

    constructor() {}
}
