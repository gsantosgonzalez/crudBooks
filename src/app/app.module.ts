import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BookListComponent } from './components/books/book-list/book-list.component';
import { NewBookComponent } from './components/books/new-book/new-book.component';
import { EditBookComponent } from './components/books/edit-book/edit-book.component';
import { BooksService } from './components/services/books.service';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home' },
  },
  {
    path: 'books',
    pathMatch: 'full',
    data: { title: 'Books list' },
    redirectTo: '/list'
  },
  {
    path: 'list',
    component: BookListComponent,
    data: { title: 'Add book' }
  },
  {
    path: 'new',
    component: NewBookComponent,
    data: { title: 'Add book' }
  },
  {
    path: 'edit/:id',
    component: EditBookComponent,
    data: { title: 'Edit book' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookListComponent,
    NewBookComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    ),
    AngularFontAwesomeModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
