import { Component, Input, OnInit } from '@angular/core';
import { IGallery } from 'src/app/common/iComponents';
import { Gallery } from 'src/app/common/language-text';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})
export class GaleryComponent implements OnInit {
  @Input() data: IGallery = Gallery['en']
  public active: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  activate() {
    this.active = !this.active;
  }

}
