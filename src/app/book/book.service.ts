import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Book } from './book';




@Injectable()
export class BookService {
    constructor(private _httpService: HttpClient) {

    }

    getAllBooks(): Observable<Book[]> {
        return this._httpService.get<Book[]>('http://localhost:8080/books');

    }
}