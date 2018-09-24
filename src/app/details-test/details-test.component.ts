import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details-test',
  templateUrl: './details-test.component.html',
  styleUrls: ['./details-test.component.css']
})
export class DetailsTestComponent implements OnInit {
  title: string = "默认";
  constructor(
    private http: HttpClient
  ) {

  }


  ngOnInit() {

    if (navigator.onLine) {
      this.getData().subscribe((data) => {
        this.title = data["items"][0].etag;
      });
    } else {
      this.title = 'assets/offline.jepg';
    }
  }

  getData() {
    return this.http.get(
      "https://www.googleapis.com/books/v1/volumes/?q=science");
  }

}
