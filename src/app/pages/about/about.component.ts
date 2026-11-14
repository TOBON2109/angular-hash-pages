import { Component } from '@angular/core';

interface Comparison {
  aspect: string;
  hash: string;
  path: string;
}

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  readonly stack: string[] = [
    'Angular',
    'TypeScript',
    'Angular Router',
    'GitHub Actions',
    'GitHub Pages',
    'Compodoc',
  ];

  readonly comparison: Comparison[] = [
    { aspect: 'Forma de la URL', hash: '/#/about', path: '/about' },
    { aspect: 'Configuración en GitHub Pages', hash: 'Ninguna', path: 'Requiere 404.html como respaldo' },
    { aspect: 'Qué recibe el servidor', hash: 'Siempre la página raíz', path: 'La ruta completa' },
    { aspect: 'Aspecto de la URL', hash: 'Menos limpia', path: 'Más limpia' },
  ];

  readonly practices: string[] = [
    'Pruebas unitarias antes de cada despliegue',
    'Documentación técnica con Compodoc',
    'Despliegue y verificación automáticos',
    'Commits con Conventional Commits',
  ];
}