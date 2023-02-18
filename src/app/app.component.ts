import { Component } from '@angular/core';
import { IPokemon } from './components/interfaces/pokemon.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'promerica-test';

  showLoading: boolean = false;

  step2: boolean = false;

  toStep2() {
    this.step2 = true;
    this.showLoading = true;
  }

  pokemonsLoaded() {
    this.showLoading = false;

  }
}
