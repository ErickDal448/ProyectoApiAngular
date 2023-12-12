import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Productos } from './productos';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  submitApplication(firstName: string, lastName: string, email: string) {
    alert(`Hola ${firstName} ${lastName}, hemos recibido tus datos y enviaremos notificaciones a: ${email}.`);
  }
  
  obtenerProductos() {
    return this.http.get('https://fakestoreapi.com/products');
  }

  obtenerProductos2(): Observable<Productos[]> {
    return this.http.get<Productos[]>('https://fakestoreapi.com/products');
  }

  obtenerProductoPorId(id: number) {
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }

  buscarProductos(titulo: string) {
    return this.http.get(`https://fakestoreapi.com/products?title=${titulo}`);
  }

}
