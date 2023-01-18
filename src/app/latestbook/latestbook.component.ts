import { Component } from '@angular/core';
import {Book} from "../book";
import {BookstoreService} from "../bookstore.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-latestbook',
  templateUrl: './latestbook.component.html',
  styleUrls: ['./latestbook.component.css']
})
export class LatestbookComponent {
  book: Book = new Book()

  constructor(private _service: BookstoreService,private _route: Router) {}

  ngOnInit(): void {
    this._service.getLatestBookFromServer().subscribe(
      data=> this.book = data,
    );
  }

  RedirectToViewBooks(){
    this._route.navigate([''])
  }
}
