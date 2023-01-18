import { Component, OnInit } from '@angular/core';
import {Book} from "../book";
import {BookstoreService} from "../bookstore.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-oldestbook',
  templateUrl: './oldestbook.component.html',
  styleUrls: ['./oldestbook.component.css']
})
export class OldestbookComponent {

  book: Book = new Book()

  constructor(private _service: BookstoreService,private _route: Router) {}

  ngOnInit(): void {
    this._service.getOldestBookFromServer().subscribe(
      data=> this.book = data,
    );
  }

  RedirectToViewBooks(){
    this._route.navigate([''])
  }
}
