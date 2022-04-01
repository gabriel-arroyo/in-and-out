import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-galery-item',
  templateUrl: './galery-item.component.html',
  styleUrls: ['./galery-item.component.scss']
})
export class GaleryItemComponent implements OnInit {
  @Input() description = '';
  constructor() { }

  ngOnInit(): void {
  }

}
