import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IndexedDbService } from '../utils/IndexedDb.Service';
import { Router, ActivatedRoute } from '@angular/router';
import * as Mock from 'mockjs';

@Component({
  selector: 'app-details-test',
  templateUrl: './details-test.component.html',
  styleUrls: ['./details-test.component.css']
})
export class DetailsTestComponent implements OnInit {
  src: string="";
  content:string="www.baidu.com"
  constructor(
    private http: HttpClient,
    private router: ActivatedRoute
    // private server: IndexedDbService
  ) {

  }
  myDB = {
    name: "test",
    version: 3,//所谓版本，并不是指数据库这个软件的版本，而是自定义的这个库的版本，当需要更新数据模式时，就提高数据库的版本就行了
    db: null
  };

  students = [{
    id: 1001,
    name: "John",
    age: 24
  }, {
    id: 1002,
    name: "Jane",
    age: 25
  }, {
    id: 1003,
    name: "Bob",
    age: 30
  }];

  ngOnInit() {
    const data = Mock.mock({
      'list|1-10':[{
        'id|+1':1
      }]
    });

   var s =  Mock.mock('@paragraph');
   this.content = s;
    // this.server.openDB(this.myDB.name, this.myDB.version,this.myDB);
    // setTimeout(function () {
    //   this.server.addData(this.myDB.db, 'students');
    //   this.server.getDataByKey(this.myDB.db, 'students', 1002);
    //   //updateDataByKey(myDB.db, 'students', student1);
    // }, 1000);
    this.router.queryParams.subscribe(q => {
       this.src = q.src;
    });
    // if (navigator.onLine) {
    //   this.getData().subscribe((data) => {
    //     this.title = data["items"][0].etag;
    //   });
    // } else {
    //   //this.title = 'assets/offline.jepg';
    // }
  }

  getData() {
    var googleurl ="https://www.googleapis.com/books/v1/volumes/?q=science";
    var url ="http://suggest.taobao.com/sug?code=utf-8&q=零食&callback=cb";
    return this.http.get(url);
  }
}
