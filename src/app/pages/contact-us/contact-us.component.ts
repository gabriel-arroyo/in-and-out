import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IContact, INavabar } from 'src/app/common/iComponents';
import { Contact, Navbar } from 'src/app/common/language-text';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  navbar: INavabar = Navbar['en'];
  data: IContact = Contact['en']
  
  constructor() {

  }

  ngOnInit(): void {
    let lang = localStorage.getItem("language") ?? "en";
    this.onLanguageChange(lang)
  }

  onLanguageChange(lang:string){
    this.navbar = Navbar[lang]
    this.data = Contact[lang]
  }
}
