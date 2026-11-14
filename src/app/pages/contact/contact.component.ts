import { Component } from '@angular/core';

interface ContactLink {
  label: string;
  description: string;
  url: string;
}

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  readonly skills: string[] = ['Angular', 'Spring Boot', 'Node.js', 'GitHub Actions', 'Jira', 'Kali Linux'];

  readonly links: ContactLink[] = [
    {
      label: 'GitHub',
      description: 'Perfil con mis proyectos',
      url: 'https://github.com/TOBON2109',
    },
    {
      label: 'Repositorio',
      description: 'Código fuente de esta aplicación',
      url: 'https://github.com/TOBON2109/angular-hash-pages',
    },
    {
      label: 'Aplicación desplegada',
      description: 'Esta app publicada en GitHub Pages',
      url: 'https://tobon2109.github.io/angular-hash-pages/',
    },
  ];
}