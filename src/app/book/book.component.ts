import { Component, OnInit } from '@angular/core';
import { Book } from '../book/book';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Book[];
  constructor(private bookService: BookService) { }


  ngOnInit() {
    this.bookService.getAllBooks().subscribe(books => {
      this.books = books;
      console.log(books);
    });
  }

}
