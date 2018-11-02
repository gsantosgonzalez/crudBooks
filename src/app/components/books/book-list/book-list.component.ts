import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToasterService } from 'angular2-toaster/angular2-toaster';

import { BooksService } from '../../services/books.service';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  public books: any[];

  constructor(
    private bookService: BooksService,
    private router: Router,
    private toaster: ToasterService
  ) { }

  ngOnInit() {
    this.listBooks();
  }

  public listBooks() {
    this.books = this.bookService.listBooks();
  };

  public editBook(book) {
    this.router.navigate(['books/edit', book.id]);
  }

  public removeBook(book) {
    this.bookService
      .removeBook(book.id)
      .then((response) => {
        if (response) {
          this.listBooks();
        }
      })
      .catch((error) => {
        this.toaster.pop('error', 'Revise la información', error.message || 'Revise el formulario');
      });
  }

}
