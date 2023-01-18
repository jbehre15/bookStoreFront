import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Book} from '../book';
import {BookstoreService} from "../bookstore.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {

  book: Book = new Book();
  constructor(private _service: BookstoreService,private _route: Router) {}

  addbookFormSubmit(value: any){
    this.book = value;
    this._service.addBookToServer(this.book).subscribe(
    );
    this.RedirectToViewBooks()
  }

  RedirectToViewBooks(){
    this._route.navigate([''])
  }
}
