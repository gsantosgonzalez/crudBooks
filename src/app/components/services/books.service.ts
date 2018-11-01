import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BooksService {
  constructor(private http: HttpClient) { }

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
      return book.id = id;
    });

    return book;
  }

  public addBook(book: any) {
    return new Promise((resolve, reject) => {
      const books = this.listBooks();

      book.id = books.length + 1;

      books.push(book);

      localStorage.setItem('books', JSON.stringify(books));

      resolve(true);
    });
  }

  public removeBook(id: number): void {
    const books = this.listBooks().filter((book) => {
      return book.id !== id;
    });

    localStorage.setItem('books', books);
  }

  public updateBook(id: number, book: any) {
    const books = this.listBooks().filter((book) => {
      return book.id !== id;
    });

    localStorage.setItem('books', books);
  }
}
