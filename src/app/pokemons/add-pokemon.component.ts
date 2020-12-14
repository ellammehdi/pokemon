import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Pokemon } from './pokemon';

@Component({
	selector: 'add-pokemon',
	templateUrl: './add-pokemon.component.html'
})
export class AddPokemonComponent implements OnInit {

	// @ts-ignore
  pokemon: Pokemon;

	constructor(private titleService: Title) { }

	ngOnInit(): void {
		this.titleService.setTitle('Ajouter un pokémon');
		this.pokemon = new Pokemon();
	}

}
