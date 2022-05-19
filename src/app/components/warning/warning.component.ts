import { Component, Input, OnInit } from '@angular/core';
import * as AOS from 'aos'
import { IWarning } from 'src/app/common/iComponents';
import { Warning } from 'src/app/common/language-text';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.scss']
})
export class WarningComponent implements OnInit {
  @Input() data : IWarning = Warning["en"]
  constructor() { }

  ngOnInit(): void {
    AOS.init()
  }

}
