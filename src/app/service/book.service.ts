import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Book } from '../model/book';




@Injectable()
export class BookService {

    private bookUrl: string;
    constructor(private _httpService: HttpClient) {
        this.bookUrl = 'http://localhost:8080/books';
    }

    getAllBooks(): Observable<Book[]> {
        return this._httpService.get<Book[]>(this.bookUrl);

    }
    saveBook(book: Book) {
        return this._httpService.post<Book>(this.bookUrl, book);
    }
}