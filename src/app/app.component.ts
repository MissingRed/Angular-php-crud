import { Component, OnInit } from "@angular/core";
import { ArticulosService } from "./articulos.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "angularConPhp";

  articulos = null;

  art = {
    codigo: null,
    descripcion: null,
    precio: null
  };

  constructor(private articulosServicio: ArticulosService) {}

  ngOnInit() {
    this.MostrarTodos();
  }

  MostrarTodos() {
    this.articulosServicio
      .mostrarTodos()
      .subscribe(result => (this.articulos = result));
  }

  Agregar() {
    this.articulosServicio.agregar(this.art).subscribe(datos => {
      if (datos["resultado"] === "ok") {
        alert(datos["mensaje"]);
        this.MostrarTodos();
      }
    });
  }

  Modificar() {
    this.articulosServicio.update(this.art).subscribe(datos => {
      if (datos["resultado"] === "ok") {
        alert(datos["mensaje"]);
        this.MostrarTodos();
      }
    });
  }

  Eliminar(codigo) {
    this.articulosServicio.eliminar(codigo).subscribe(datos => {
      if (datos["resultado"] === "ok") {
        alert(datos["mensaje"]);
        this.MostrarTodos();
      }
    });
  }

  Seleccionar(codigo) {}
}
