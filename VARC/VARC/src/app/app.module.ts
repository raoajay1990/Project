import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { DataService } from './services/dataService';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, FooterComponent],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
