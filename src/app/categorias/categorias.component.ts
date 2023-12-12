import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './categorias.component.html',
  styleUrls:  ['./categorias.component.css', '../inicio/inicio.component.css']
})
export class CategoriasComponent {
  title = 'ProyectoAPI';
  api: ApiService = inject(ApiService);
  productos = [] as any;
  productosPorCategoria = [] as any;
  categorias = [] as any; // Declara la variable 'categorias' aquí

  ngOnInit(): void {
    this.api.obtenerProductos().subscribe({
      next: (resp) => {
        this.productos = resp; // Guarda todos los productos
  
        // Crea un objeto donde las claves son las categorías y los valores son los productos de esa categoría
        let productosPorCategoria = this.productos.reduce((categorias: any, producto: any) => {
          let categoria = producto.category;
          if (!categorias[categoria]) {
            categorias[categoria] = [];
          }
          categorias[categoria].push(producto);
          return categorias;
        }, {});
  
        // Obtiene una lista de las categorías y las ordena alfabéticamente
        this.categorias = Object.keys(productosPorCategoria).sort();
  
        // Asigna los productos a las categorías correspondientes
        this.productosPorCategoria = this.categorias.map((categoria : any) => productosPorCategoria[categoria]);
      },
      error: (err) => {
        console.log('Error al conectar a la api');
      }
    });
  }
}
