import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  urlBaseImg = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
  listPokemon = [];

  count: number = 0;
  next: string = "";
  previous: string = "";
  page: number = 1;

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    this.getPokemons(this.apiService.urlApi);
  }

  getPokemons(url: string) {
    this.listPokemon = [];
    this.apiService.getPokemonList(url).subscribe(response => {
      this.count = response['count'];
      this.next = response['next'];
      this.previous = response['previous'];

      response['results'].forEach(pokemon => {
        this.apiService.getPokemonData(pokemon['url']).subscribe(pokemonData => {
          this.listPokemon.push(pokemonData)
          this.listPokemon.sort((a, b) => a['id'] - b['id']);
        });
      });
    });
  }

  nextPage(url: string) {
    this.page = this.page + 1;
    this.getPokemons(url);
  }

  previusPage(url: string) {
    this.page = this.page - 1;
    this.getPokemons(url);
  }

  totalPages(numero: number) {
    return Math.ceil(numero / 20);
  }

}
