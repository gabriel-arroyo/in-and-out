import { Component, Input, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, tap, switchAll } from 'rxjs/operators';
import { GlobalState } from 'src/app/common/global-state';
import { IPoster } from 'src/app/common/iComponents';
import { Poster } from 'src/app/common/language-text';
@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent implements OnInit {
  @Input() data: IPoster = Poster['en']

  constructor() { }

  ngOnInit(): void {

  }

}
