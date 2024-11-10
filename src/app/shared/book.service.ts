import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { bookInterface } from '../test-request/test-request-get/test-request-get';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  httpBook(name: string){
    return  this.http.get<bookInterface[]>(`https://anapioficeandfire.com/api/books?name=${name}`)
  }
}
