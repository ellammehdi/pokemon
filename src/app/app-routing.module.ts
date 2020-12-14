import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import {ListPokemonComponent} from './pokemons/list-pokemon.component';
import {AddPokemonComponent} from './pokemons/add-pokemon.component';
import {EditPokemonComponent} from './pokemons/edit-pokemon.component';
import {DetailPokemonComponent} from './pokemons/detail-pokemon.component';

// routes
const appRoutes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ListPokemonComponent },
  { path: 'add', component: AddPokemonComponent },
  { path: 'edit/:id', component: EditPokemonComponent },
  { path: ':id', component: DetailPokemonComponent },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
