import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.scss']
})
export class WarningComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init()
  }

}
