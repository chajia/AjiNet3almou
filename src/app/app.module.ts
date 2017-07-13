import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import 'hammerjs';

import {AppComponent} from './app.component';
import {AppHeaderComponent} from './app-header/app-header.component';
import {AppMenuComponent} from './app-menu/app-menu.component';
import {AppFooterComponent} from './app-footer/app-footer.component';
import {AppContentComponent} from './app-content/app-content.component';
import {TestComponentComponent} from './test-component/test-component.component';

import {CustomerService} from './services/customer.service';
import {FormateurService} from './services/formateur.service';
import {TrainingService} from './services/training.service';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppMenuComponent,
    AppFooterComponent,
    AppContentComponent,
    TestComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CustomerService,
    FormateurService,
    TrainingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
