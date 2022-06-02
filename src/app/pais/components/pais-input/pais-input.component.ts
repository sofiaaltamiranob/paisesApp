import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  
  @Input() placeholder: string ='';

  debouncer: Subject<string> = new Subject();

  terminoABuscar: string = '';

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(500)).subscribe(valor => {
      console.log('debouncer:', valor)
    })
  }
  buscar() {
    this.onEnter.emit(this.terminoABuscar);
  }

  teclaPresionada() {
    this.debouncer.next(this.terminoABuscar);
  }


}
