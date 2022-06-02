import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';


@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {
  terminoABuscar: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisServicio: PaisService) { }


  buscar(terminoABuscar: string) {
    this.hayError = false;
    this.terminoABuscar = terminoABuscar;


    this.paisServicio.buscarPais(terminoABuscar)
      .subscribe({
        next: (paises) => {
          console.log(paises);
          this.paises = paises;
        },
        error: (err) => {
          this.hayError = true;
          this.paises = [];
        }
      });

    // this.paisServicio.buscarPais(this.terminoABuscar).subscribe( (paises) => {
    //   console.log(paises);
    //   this.paises = paises;


    // }, (err) => {
    //   this.hayError = true;
    //   this.paises = [];
    // });
  }
  sugerencias( termino: string){
this.hayError = false;

  }

}
