import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BookListComponent } from './components/books/book-list/book-list.component';
import { BooksService } from './components/services/books.service';
import { BookUpsertComponent } from './components/books/book-upsert/book-upsert.component';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { ToasterService } from 'angular2-toaster';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'books',
    children: [
      {
        path: 'list',
        component: BookListComponent,
      },
      {
        path: 'new',
        component: BookUpsertComponent,
      },
      {
        path: 'edit/:id',
        component: BookUpsertComponent,
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookListComponent,
    BookUpsertComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    ),
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),

  ],
  providers: [
    BooksService,
    BsModalService,
    ToasterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
