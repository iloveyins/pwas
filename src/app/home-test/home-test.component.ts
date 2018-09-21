import { Component, OnInit } from '@angular/core';

class CatImage {
  message: string;
  api: string;
  fontsize: number;
}

@Component({
  selector: 'app-home-test',
  templateUrl: './home-test.component.html',
  styleUrls: ['./home-test.component.css']
})
export class HomeTestComponent implements OnInit {
  private image: CatImage = {
    message: 'Progressive Web Cat',
    api: 'https://iloveyins.github.io/pwatest',
    fontsize: 40
  };
 
  public src: string;
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
  generateArray(value: number): number[] {
    return new Array(value);
  }
  ngOnInit() {
    if (navigator.onLine) {
      this.generateSrc();
    } else {
      this.src = 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png';
    }
  }
  generateSrc(): void {
    this.src = this.image.api + this.image.message +
      '?size=' + this.image.fontsize +
      '&ts=' + Date.now();
  }
}
