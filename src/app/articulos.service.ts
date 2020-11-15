import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ArticulosService {
  url = "http://localhost:80/AngularPhp/";
  constructor(private http: HttpClient) {}

  mostrarTodos() {
    return this.http.get(`${this.url}mostrarTodos.php`);
  }

  agregar(articulo) {
    return this.http.post(`${this.url}agregar.php`, JSON.stringify(articulo));
  }

  eliminar(codigo: number) {
    return this.http.get(`${this.url}eliminar.php?codigo=${codigo}`);
  }

  seleccionar(codigo: number) {
    return this.http.get(`${this.url}seleccionar.php?codigo=${codigo}`);
  }

  update(articulo) {
    return this.http.post(`${this.url}update.php`, JSON.stringify(articulo));
  }
}
