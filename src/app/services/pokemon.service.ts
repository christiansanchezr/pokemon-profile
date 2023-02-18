import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  baseUrl = 'https://pokeapi.co/api/v2/';


  async getPokemons() {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(this.baseUrl, {
          headers: { 'Accept': 'application/json' }
        })

        const body = response.json();

        resolve(body);
      } catch (e) {
        reject(e);
      }
    })
  }
}
