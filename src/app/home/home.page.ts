import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  urlBaseImg = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
  listPokemon = [
    { number: 1, name: "Bulbasaur", types: ["Grass", "Poison"], img: "001.png" },
    { number: 4, name: "Charmander", types: ["Fire"], img: "004.png" },
    { number: 7, name: "Squirtle", types: ["Water"], img: "007.png" },
    { number: 25, name: "Pikachu", types: ["Eletric"], img: "025.png" },
    { number: 149, name: "Dragonite", types: ["Dragon", "Flying"], img: "149.png" },
  ];

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getPokemonList(this.apiService.urlApi)
  }

}
