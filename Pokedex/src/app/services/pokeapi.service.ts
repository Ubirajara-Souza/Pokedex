import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface PokeListResponse {
  created: string;
  modified: string;
  name: string;
  pokemon: any[];
  resource_uri: string;
  number: any
}

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  private url = 'https://dev.treinaweb.com.br/pokeapi'
  pokeList: PokeListResponse[] = [
  ]

  constructor(private http: HttpClient) { }

  listAll() {
    this.http.get<PokeListResponse>(`${this.url}/pokedex/1`).subscribe(
      response => {
        response.pokemon.forEach(pokemon => {
          pokemon.number = this.getNumberFromurl(pokemon.resource_uri)
        })
        this.pokeList = this.sortPokemon(response.pokemon).filter(pokemon => pokemon.number < 1000)
      }
    )
  }

  getPokemon(number: number): Observable<any> {
    return this.http.get(`${this.url}/pokemon/${number}`)
  }

  private getNumberFromurl(url: string) {
    return parseInt(url.replace(/.*\/(\d+)\/$/, '$1'))
  }

  private sortPokemon(pokemonList: PokeListResponse[]) {
    return pokemonList.sort((a, b) => {
      return (a.number > b.number ? 1 : -1)
    })
  }

}
