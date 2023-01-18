import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book} from "./book";
import {NgForm} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class BookstoreService {

  constructor(private _http:HttpClient) { }

  getBooksFromServer():Observable<any> {
   return this._http.get<any>("http://localhost:8083/bookStore")
  }

  addBookToServer(book: Book): Observable<any>{
    return this._http.post<any>("http://localhost:8083/bookStore", book);
  }

  deleteBookFromServer(id: number): Observable<any>{
    return this._http.delete<any>("http://localhost:8083/bookStore/" + id);
  }

  getOldestBookFromServer():Observable<any> {
    return this._http.get<any>("http://localhost:8083/bookStore/oldestBook")
  }

  getLatestBookFromServer():Observable<any> {
    return this._http.get<any>("http://localhost:8083/bookStore/latestBook")
  }
}
