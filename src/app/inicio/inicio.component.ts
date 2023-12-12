import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';
declare var $: any; // Declara la variable $ para usar jQuery
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterModule, CommonModule ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  title = 'ProyectoAPI';
  api: ApiService = inject(ApiService);
  productos = [] as any;
  productosCarrousel = [] as any;
  ngOnInit(): void {
    this.api.obtenerProductos().subscribe((resp: any) => {
      this.productos = resp; // Toma todos los productos
      // Crea una copia de la lista de productos
      let productosOrdenados = [...this.productos];

      // Ordena la copia de la lista de productos por 'rate' en orden descendente
      productosOrdenados.sort((a: any, b: any) => b.rating.rate - a.rating.rate);
      this.productosCarrousel = productosOrdenados.slice(0, 3); // Toma solo los primeros tres productos
    }, (err) => {
      console.log('Error al conectar a la api');
    });
  }
}
