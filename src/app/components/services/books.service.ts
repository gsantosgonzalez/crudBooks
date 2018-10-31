import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BooksService {
  constructor(private http: HttpClient) { }

  public paginate() {
      return [
          {
            id: 1,
            book: 'Ensayo sobre la ceguera',
            author: 'José Saramago',
            pages: 250,
            editorial: 'Alfaguara'
          },
          {
            id: 2,
            book: 'El Conde de Montecristo',
            author: 'Alejandro Dumas',
            pages: 700,
            editorial: 'Porrúa'
          },
          {
            id: 3,
            book: 'Cien años de soledad',
            author: 'Gabriel García Márquez',
            pages: 320,
            editorial: 'FCE'
          },
          {
            id: 4,
            book: 'Demian',
            author: 'Herman Hesse',
            pages: 180,
            editorial: 'Tomo'
          },
          {
            id: 5,
            book: 'La Iliada',
            author: 'Homero',
            pages: 600,
            editorial: 'Porrúa'
          }
      ];
  }
}