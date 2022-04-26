import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesPageComponent } from './components/services-page/services-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CatalogPageComponent } from './components/catalog-page/catalog-page.component';
import { ProfilPageComponent } from './components/profil-page/profil-page.component';
import { ArmaturaPageComponent } from './components/armatura-page/armatura-page.component';
import { UgolokPageComponent } from './components/ugolok-page/ugolok-page.component';
import { MetallPageComponent } from './components/metall-page/metall-page.component';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ServicesPageComponent,
    MainPageComponent,
    CatalogPageComponent,
    ProfilPageComponent,
    ArmaturaPageComponent,
    UgolokPageComponent,
    MetallPageComponent,
    ContactsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
