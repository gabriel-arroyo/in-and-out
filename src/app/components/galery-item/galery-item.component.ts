import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-galery-item',
  templateUrl: './galery-item.component.html',
  styleUrls: ['./galery-item.component.scss']
})
export class GaleryItemComponent implements OnInit {
  @Input() model = '';
  @Input() price = '';
  @Input() src = '../../../assets/images/img1.png';
  @Input() index = '0';
  constructor() { }

  ngOnInit(): void {
  }

  isEven(str: string) {
    let n = parseInt(str)
    let even = n % 2 === 0
    return even
  }

  isLeft(str: string) {
    let n = parseInt(str)
    let even = n % 3 === 0
    return even
  }

  isRight(str: string) {
    let n = parseInt(str)
    let even = ((n + 1) % 3) === 0
    return even
  }

}
