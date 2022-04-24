import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArmaturaPageComponent } from './components/armatura-page/armatura-page.component';
import { CatalogPageComponent } from './components/catalog-page/catalog-page.component';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MetallPageComponent } from './components/metall-page/metall-page.component';
import { ProfilPageComponent } from './components/profil-page/profil-page.component';
import { ServicesPageComponent } from './components/services-page/services-page.component';
import { UgolokPageComponent } from './components/ugolok-page/ugolok-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'uslugi', component: ServicesPageComponent},
  { path: 'catalog', component: CatalogPageComponent},
  { path: `profil'naya-truba`, component: ProfilPageComponent},
  { path: 'armatura', component: ArmaturaPageComponent},
  { path: 'ugolok', component: UgolokPageComponent},
  { path: 'metall', component: MetallPageComponent},
  { path: 'contacts', component: ContactsPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
