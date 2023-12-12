import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Productos } from '../productos';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  busqueda = [] as any;
  filtro = [] as any;
  productos$ = new Subject<string>();

  constructor(private apiService: ApiService) {
    this.productos$.pipe(
      switchMap(titulo => 
        this.apiService.obtenerProductos2().pipe(
          map((productos: Productos[]) => productos.filter((producto: Productos) => producto.title.toLowerCase().includes(titulo.toLowerCase())))
        )
      )
    ).subscribe((productos: Productos[]) => {
      this.filtro = productos;
      if(this.busqueda == ""){
        this.filtro = [];
      }
      console.log(this.filtro);
    });
  }

  buscar(titulo: string) {
    this.productos$.next(titulo);
  }
}