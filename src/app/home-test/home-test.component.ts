import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-test',
  templateUrl: './home-test.component.html',
  styleUrls: ['./home-test.component.css']
})
export class HomeTestComponent implements OnInit {

  src: string="";

  array = ["https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"];
    
  marksGutter = {
    8: 8,
    16: 16,
    24: 24,
    32: 32,
    40: 40,
    48: 48
  };

  marksCount = {
    2: 2,
    3: 3,
    4: 4,
    6: 6,
    8: 8,
    12: 12
  };

  constructor() { }
 
  ngOnInit() {
  
  }

}
