import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap} from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  paises!: Country[];
  constructor(
    private rutaActiva: ActivatedRoute,
    private paisServicio: PaisService) { }

  ngOnInit(): void {

    this.rutaActiva.params
    .pipe(switchMap(({id}) => this.paisServicio.getPaisPorCodigo(id))
    )
    .subscribe(pais => this.paises = pais)


  }

}

// this.rutaActiva.params.subscribe(({ id }) => {
//   console.log(id);

//   this.paisServicio.getPaisPorCodigo(id).subscribe(pais => {
//     console.log(pais);
//   })
// })