import { Component, Input } from '@angular/core';
import { IPokemon } from '../interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {

  @Input() pokemons?: IPokemon[];
  
}
