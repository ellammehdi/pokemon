import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Pokemon } from './pokemon';
import { Router } from '@angular/router';
import { PokemonsService } from './pokemons.service';

@Component({
	selector: 'list-pokemon',
	templateUrl: './list-pokemon.component.html'
})
export class ListPokemonComponent implements OnInit {

	pokemons: Pokemon[] = [];

	constructor(
		private router: Router,
		private pokemonsService: PokemonsService,
		private titleService: Title) { }

	ngOnInit(): void {
		this.getPokemons();
	}

  /**
   * Retourne une liste de pokemons à partir du données statiques
   */
	getPokemons(): void {
		this.titleService.setTitle('Liste des pokémons');
		this.pokemonsService.getPokemons()
			.subscribe(pokemons => this.pokemons = pokemons);
	}

	selectPokemon(pokemon: Pokemon): void {
		const link = ['/', pokemon.id];
		this.router.navigate(link);
	}

}
