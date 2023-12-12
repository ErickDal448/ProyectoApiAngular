import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [ CommonModule, FormComponent ],
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  productoInfo = [] as any;
  productos = [] as any;
  api: ApiService = inject(ApiService);

  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.api.obtenerProductoPorId(id).subscribe((resp: any) => {
        this.productoInfo = resp;
      }, (err) => {
        console.log('Error al conectar a la api');
      });
      this.api.obtenerProductos().subscribe((resp: any) => {
        this.productos = resp;
      }, (err) => {
        console.log('Error al conectar a la api');
      });
    });
  }
  
    navegarAlProductoAnterior(): void {
      
      if (this.productoInfo.id > 1) {
        this.router.navigateByUrl('/Info/' + (this.productoInfo.id - 1));
      }
    }
  
    navegarAlProductoSiguiente(): void {
      if(this.productoInfo.id < this.productos.length){
        this.router.navigateByUrl('/Info/' + (this.productoInfo.id + 1));
      }
    }
  }

  
