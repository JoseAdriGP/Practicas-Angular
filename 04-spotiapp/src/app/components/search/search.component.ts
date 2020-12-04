import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  artistas: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor( private spotify: SpotifyService ) {
    this.error = false;
  }

  buscar( termino: string ){
    this.loading = true;
    this.spotify.getArtistas( termino )
      .subscribe( (data: any) => {
        this.artistas = data;
        this.loading = false;
      }, ( errorServicio ) => {
        this.error = true;
        this.loading = false;
        console.log(errorServicio);
        this.mensajeError = errorServicio.error.error.message;
      });
  }

}
