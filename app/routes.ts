import { Route, RouterModule } from '@angular/router';

import { WordsComponent } from './components/words/words.component';
import { CardsComponent } from './components/cards/cards.component';

export const routes: Route[] = [
    { path: '', pathMatch: 'full', component: WordsComponent },
    { path: 'cards', component: CardsComponent }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
