import { Component, OnInit } from '@angular/core';
import { IAbout, INavabar } from 'src/app/common/iComponents';
import { About, Navbar } from 'src/app/common/language-text';
import * as AOS from 'aos';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  navbar: INavabar = Navbar['en'];
  data: IAbout = About['en']
  constructor() { }

  ngOnInit(): void {
    AOS.init();
    AOS.refresh();
    let lang = localStorage.getItem("language") ?? "en";
    this.onLanguageChange(lang)
  }
  onLanguageChange(lang:string){
    this.navbar = Navbar[lang]
    this.data = About[lang]
  }
}
