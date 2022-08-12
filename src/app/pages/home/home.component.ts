import { Component, OnInit, HostListener } from '@angular/core';
import * as AOS from 'aos'
import { IGallery, INavabar, IPoster, IWarning } from 'src/app/common/iComponents';
import { Gallery, Navbar, Poster, Warning } from 'src/app/common/language-text';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  poster: IPoster = Poster['en'];
  warning: IWarning = Warning['en'];
  gallery: IGallery = Gallery['en'];
  navbar: INavabar = Navbar['en'];
  constructor() { }



  ngOnInit(): void {
    AOS.init()
    AOS.refresh()
    let lang = localStorage.getItem("language") ?? "en";
    this.onLanguageChange(lang)
  }

  onLanguageChange(lang: string) {
    this.poster = Poster[lang]
    this.warning = Warning[lang]
    this.gallery = Gallery[lang]
    this.navbar = Navbar[lang]
  }

}
