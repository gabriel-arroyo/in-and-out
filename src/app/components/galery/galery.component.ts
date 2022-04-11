import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})
export class GaleryComponent implements OnInit {
  public active: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  activate() {
    this.active = !this.active;
  }

}
