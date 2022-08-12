import { Component, HostListener, Input, OnInit } from '@angular/core';
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
  public innerWidth: any;

  constructor() { }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
  }
  ngOnInit() {
    this.innerWidth = window.innerWidth;
    //   const video = document.getElementById('video') as HTMLVideoElement || null;
    //   video?.play();
  }

  onClick() {
    const video = document.getElementById('video') as HTMLVideoElement || null;
    video?.play();
  }


}
