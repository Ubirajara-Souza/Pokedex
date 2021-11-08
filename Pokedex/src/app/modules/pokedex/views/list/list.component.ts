import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  nameFilter = "";
  selectedPokemon: any = null
  get pokemonList() {
    return this.pokeapi.pokeList.filter(pokemon  => {
      return pokemon.name.toLowerCase().indexOf(this.nameFilter.toLowerCase()) !== -1
    })
  } 

  get pokemonSprite() {
    const number = ('000' + this.selectedPokemon.number).slice(-3)
    return `//serebii.net/sunmoon/pokemon/${number}.png`
  }

  constructor(
    private pokeapi: PokeapiService
  ) {

  }

  ngOnInit(): void {
    this.pokeapi.listAll()
  }

  selectPokemon(pokemon: any) {
    this.selectedPokemon = pokemon
  }

}
