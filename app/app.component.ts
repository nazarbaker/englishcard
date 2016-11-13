import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    styles: [`h1 {
	color: white;
	background: darkgray;
	padding: 20px;
}
`],
    template: `
<h1>My First {{name}} app</h1>
<router-outlet></router-outlet>

<a [routerLink]="['/']">Words</a> | <a [routerLink]="['/cards/', { id: 2 }]">Cards</a>`,
})
export class AppComponent {
    name: string = "Angular 2 on Express";

    constructor() {}
}
