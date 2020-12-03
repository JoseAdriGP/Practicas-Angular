import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Heroe, HeroesService } from '../../services/heroes.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor(  private activateRoute: ActivatedRoute,
                private _heroesServices: HeroesService,
                private router: Router
    ) {
    this.activateRoute.params.subscribe( params => {
      this.heroe = this._heroesServices.getHeroe(params['id']);
      console.log(this.heroe);
    });
  }

  ngOnInit(): void {
  }

  regresar(){
    this.router.navigate( ['heroes'] );
  }

}
