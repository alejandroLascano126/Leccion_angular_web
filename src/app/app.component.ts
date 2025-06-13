import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecursosService } from './servicios/recursos.service';
import { Postres } from './interfaz/postres';
import { CommonModule } from '@angular/common';
import { mapApiToReceta } from './interfaz/postres';
import { HttpClientModule } from '@angular/common/http';
import { CuerpoComponent } from './shared/cuerpo/cuerpo.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CommonModule, CuerpoComponent],
  providers: [RecursosService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'leccion_angular_web';
  postres: Postres[] = [];
  mostrarRecetas = false;
  selectedRecetaId: string | null = null;

  constructor(private recursosService: RecursosService) {
  this.recursosService.obtenerDatos().subscribe((respuesta: Postres[]) => {
    this.postres = respuesta;
  });
}

  toggleInstrucciones(nombre: string) {
    this.selectedRecetaId = this.selectedRecetaId === nombre ? null : nombre;
  }

  mostrarMenuPrincipal() {
    this.mostrarRecetas = false;
  }

  mostrarRecetasComida() {
    this.mostrarRecetas = true;
  }

  trackByRecetaId(index: number, receta: Postres): string {
    return receta.nombre;
  }
}
