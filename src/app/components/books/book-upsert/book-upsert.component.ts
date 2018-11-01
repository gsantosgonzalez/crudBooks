import { Component, OnInit, AfterViewInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BooksService } from 'src/app/components/services/books.service';

@Component({
  selector: 'book-upsert',
  templateUrl: './book-upsert.component.html',
  styleUrls: ['./book-upsert.component.css']
})
export class BookUpsertComponent implements OnInit, AfterViewInit {

  public book: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: BooksService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params.id;

      if (id) {
        this.book = this.service.getBook(id);
      } else {
        this.initBookProperties();
      }
    });
  }

  ngAfterViewInit() {

  }

  public initBookProperties() {
    this.book = {
      id: '',
      book: '',
      author: '',
      pages: 0,
      editorial: ''
    };
  }

  public validateBook(book) {
    let valid = false;

    if (book.book !== '' && book.author !== '' && book.pages > 0 && book.editorial !== '') {
      valid = true;
    }

    return valid;
  }

  public store(book) {
    if (book.id !== '') {
        this.service.updateBook(book.id, book);
    } else {
      this.service.addBook(book).then(
        (response) => {
          this.router.navigate(['books/list']);
      });
    }
  }
}
