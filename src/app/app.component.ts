import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet} from '@angular/router';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule, RouterOutlet, HttpClientModule, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ProyectoAPI';
  api: ApiService = inject(ApiService);
  productos = [] as any;
  ngOnInit(): void {
    this.api.obtenerProductos().subscribe({
      next: (resp) => {
        this.productos = resp;
      },
      error: (err) => {
        console.log('Error al conectar a la api');
      }
    });
  }
}
