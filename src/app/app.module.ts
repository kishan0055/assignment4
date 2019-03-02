import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import {RouterModule , Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { GotHttpService } from './got-http-service.service';
import { ViewCharactersComponent } from './view-characters/view-characters.component';
import { ViewHousesComponent } from './view-houses/view-houses.component';
import { BooksComponent } from './books/books.component';
import { CharactersComponent } from './characters/characters.component';
import { HousesComponent } from './houses/houses.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewComponent,
    ViewCharactersComponent,
    ViewHousesComponent,
    BooksComponent,
    CharactersComponent,
    HousesComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ToastModule.forRoot(),
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'view/:url', component: ViewComponent},
      {path: 'viewcharacters/:url', component: ViewCharactersComponent},
      {path: 'viewhouses/:url', component: ViewHousesComponent},
      {path: 'books', component: BooksComponent},
      {path: 'characters', component: CharactersComponent},
      {path: 'houses', component: HousesComponent},
      {path: 'about', component: AboutComponent}

    ])
  ],
  providers: [GotHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }