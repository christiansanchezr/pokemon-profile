import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileInfoComponent,
    ProfileFormComponent,
    PokemonListComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
