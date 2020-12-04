import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
	constructor( private http: HttpClient ) { }

	getQuery( query: string ){
		const url = `https://api.spotify.com/v1/${ query }`;
		const headers = new HttpHeaders({
			'Authorization': 'Bearer <token que te obtengas de spotify>'
		});
		return this.http.get(url, { headers });
	}

	getNewReleases() {
		return this.getQuery('browse/new-releases')
			.pipe( map( data => data['albums'].items ));
	}

	getArtistas( termino: string ){
		return this.getQuery( `search?q=${ termino }&type=artist&limit=15` )
			.pipe( map( data => data['artists'].items ));
	}
	  
  getArtista( id: string ){
		return this.getQuery( `artists/${ id }` );
	}
		
	getTopTracks( id: string ){
		return this.getQuery( `artists/${ id }/top-tracks?market=es`)
			.pipe( map( data => data['tracks'] ));
	}
}
