import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { HttpErrorResponse } from "@angular/common/http";


@Injectable()
export class GotHttpService {
  private baseUrl = 'https://anapioficeandfire.com/api';
  constructor(private _http: HttpClient) {
    console.log("BlogHttpService is called")
      }
      private handleError(err: HttpErrorResponse) {
        console.log("Handle error Http calls")
        console.log(err.message);
        return Observable.throw(err.message);
      }
      getAllItems(): any {
        console.log("reached service");
        return Observable.forkJoin(
           this._http.get(this.baseUrl + '/books' ),
           this._http.get(this.baseUrl + '/characters' ),
           this._http.get(this.baseUrl + '/houses' )
          );
          }// end get all blogs
          getBooks(): any {
                let myResponse = this._http.get(this.baseUrl + '/books' );
                return myResponse;

              }
              getCharacters(): any {
                let myResponse = this._http.get(this.baseUrl + '/characters' );
                return myResponse;

              }
              getHouses(): any {
                let myResponse = this._http.get(this.baseUrl + '/houses' );
                return myResponse;

              }
              getSingleBlog(url): any {
                let myResponse = this._http.get(url);
                return myResponse;

              }
}