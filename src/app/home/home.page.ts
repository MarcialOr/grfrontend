import { Component } from '@angular/core';
import { Anuncio } from 'src/Models/Anuncio';
import { AnunciosService } from '../services/anuncios.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  anuncios: Anuncio[];

  constructor(
    private _anunciosService: AnunciosService
  ) {}

  ngOnInit(){
    this.obtenerAnuncios(); 
  }

  obtenerAnuncios(){
    this._anunciosService.obtenerAnuncios().subscribe(data => {
      this.anuncios = data;
      console.log(this.anuncios);
      if(event){}
    });
  }

  

}
