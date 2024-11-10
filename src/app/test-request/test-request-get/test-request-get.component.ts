import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { bookInterface } from './test-request-get';

@Component({
  selector: 'app-test-request-get',
  templateUrl: './test-request-get.component.html',
  styleUrl: './test-request-get.component.scss'
})
export class TestRequestGetComponent {
  bookList: bookInterface[] = [];
  constructor(private http: HttpClient) { }

  // ngOnInit(): void {
  //   this.http.get<bookInterface[]>('https://anapioficeandfire.com/api/books')
  //   .subscribe((data) => {
  //     console.log(data);
  //     this.bookList = data
  //   });
  // }

  handleSearch(name: string) {
    this.http.get<bookInterface[]>(`https://anapioficeandfire.com/api/books?name=${name}`)
    .subscribe((data) => {
      console.log(data);
      this.bookList = data
    })
  }
}
