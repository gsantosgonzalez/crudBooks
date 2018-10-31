import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  public books: any[];

  constructor(
    private bookService: BooksService
  ) { }

  ngOnInit() {
    this.paginate();
  }

  public paginate() {
    this.books = this.bookService.paginate();
  }

}
