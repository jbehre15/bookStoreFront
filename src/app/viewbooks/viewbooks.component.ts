import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BookstoreService} from '../bookstore.service';
import {Book} from '../book';
import {NgModule} from "@angular/core";

@Component({
  selector: 'app-viewbooks',
  templateUrl: './viewbooks.component.html',
  styleUrls: ['./viewbooks.component.css']
})
export class ViewbooksComponent implements OnInit{
    books: Array<Book> = [];

   constructor(private _service: BookstoreService,private _route: Router) {}

   ngOnInit(): void{

      this.getbooks();

   }


   getbooks() {

     this._service.getBooksFromServer().subscribe(
            data => this.books = data,
     )

   }

  deletebook(id : number){

     this._service.deleteBookFromServer(id).subscribe()
   }



   RedirectToAddBook(){
     this._route.navigate(['addbook'])
   }

   RedirectToOldestBook(){
     this._route.navigate(['oldestbook'])
   }

  RedirectToLatestBook(){
    this._route.navigate(['latestbook'])
  }
}
