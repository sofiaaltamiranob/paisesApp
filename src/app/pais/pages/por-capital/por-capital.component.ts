import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {
  terminoABuscar: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisServicio: PaisService) { }

  buscar(termino: string) {
    this.hayError = false;
    this.terminoABuscar = termino;

    this.paisServicio.buscarCapital(termino).subscribe({
      next: (paises) => {
        this.paises = paises;
      },
      error: (err) => {
        this.hayError = true;
        this.paises = [];
      }
    });
  }
  sugerencias(termino: string) { }
}
