import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Stat {
  value: string;
  label: string;
}

interface UrlExample {
  hash: string;
  route: string;
}

interface PipelineStep {
  title: string;
  detail: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  readonly stats: Stat[] = [
    { value: '3', label: 'Rutas navegables' },
    { value: '#/', label: 'Hash Location Strategy' },
    { value: '3', label: 'Etapas del pipeline' },
    { value: '100%', label: 'Despliegue automático' },
  ];

  readonly urlExamples: UrlExample[] = [
    { hash: '#/', route: 'Inicio' },
    { hash: '#/about', route: 'Acerca de' },
    { hash: '#/contact', route: 'Contacto' },
  ];

  readonly pipelineSteps: PipelineStep[] = [
    { title: 'Checkout y Node.js', detail: 'Descarga el código y prepara Node 24 con caché de npm.' },
    { title: 'Instalar dependencias', detail: 'Ejecuta npm ci para una instalación reproducible.' },
    { title: 'Pruebas unitarias', detail: 'Si una prueba falla, el despliegue se detiene.' },
    { title: 'Build de Angular', detail: 'Compila con el base-href del repositorio.' },
    { title: 'Documentación', detail: 'Genera Compodoc dentro del sitio publicado.' },
    { title: 'Despliegue y verificación', detail: 'Publica en GitHub Pages y comprueba que la app responde.' },
  ];
}