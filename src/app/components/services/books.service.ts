import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { reject } from 'q';
import uuidv1 from 'uuid';

@Injectable()
export class BooksService {
  constructor(
    private http: HttpClient
  ) { }

  public listBooks() {
    const books = JSON.parse(localStorage.getItem('books'));

    if (books) {
      return books;
    } else {
      return [];
    }

  }

  public getBook(id) {
    const books = this.listBooks();

    const book = books.find((book) => {
      return book.id == id;
    });

    return book;
  }

  public addBook(newBook: any) {
    return new Promise((resolve, reject) => {
      let books = this.listBooks();

      if (!newBook.id) {
        newBook.id = uuidv1();

        books.push(newBook);
      } else {
        console.log(typeof newBook);
        books = books.map((book) => {
          return (book.id === newBook.id) ? newBook : book;
        });
      }

      localStorage.setItem('books', JSON.stringify(books));

      resolve(true);
    });
  }

  public removeBook(id: number) {
    const book = this.listBooks().find((book) => {
      return book.id == id;
    });

    if (!book) {
      reject('Book not found');
    }

    return new Promise((resolve, reject) => {
      const books = this.listBooks().filter((book) => {
        return book.id !== id;
      });

      localStorage.setItem('books', JSON.stringify(books));

      resolve(true);
    });
  }
}
