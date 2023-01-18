import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';
import { AddbookComponent } from './addbook/addbook.component';
import {OldestbookComponent} from "./oldestbook/oldestbook.component";
import {LatestbookComponent} from "./latestbook/latestbook.component";

const routes: Routes = [
{ path:'addbook', component:AddbookComponent},
  { path:'', component:ViewbooksComponent},
  {path:'oldestbook', component: OldestbookComponent},
  {path:'latestbook', component: LatestbookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
