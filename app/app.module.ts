import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { CardsComponent } from "./components/cards/cards.component";
import { routing } from "./routes";
import { WordsComponent } from "./components/words/words.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    declarations: [
        AppComponent,
        CardsComponent,
        WordsComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
