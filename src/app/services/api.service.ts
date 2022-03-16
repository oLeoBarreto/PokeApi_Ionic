import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlApi = "https://pokeapi.co/api/v2/pokemon";

  constructor(private http: HttpClient) { }

  getPokemonList(url: string) {
    const pokemonList = [];

    this.http.get(url).subscribe(response => {
      response['results'].forEach(pokemons => {
        const pokemonData = this.getPokemonData(pokemons['url']);
        pokemonList.push(pokemonData);
      });
    });

    console.log(pokemonList);
  }

  getPokemonData(url: string) {
    return this.http.get(url).subscribe(response => {
      return response;
    });
  }
}
