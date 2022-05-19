import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GlobalState } from 'src/app/common/global-state';
import { INavabar } from 'src/app/common/iComponents';
import { Navbar } from 'src/app/common/language-text';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() languageEmitter = new EventEmitter<string>();
  @Input() data: INavabar = Navbar["en"];
  languageForm: FormGroup;

  languages = [
    {name:"English",short:"en"},
    {name:"Español",short:"es"},
  ]

  constructor(private fb: FormBuilder) {
    this.languageForm = this.fb.group({
      language: ["en"]
    })
  }

  ngOnInit(): void {
    let lang = localStorage.getItem("language") ?? "en";
    this.languageForm.controls['language'].setValue(lang)
  }

  onChangeLanguage(): void {
    let lang:string = this.languageForm.get("language")?.value
    console.log(this.languageForm.value)
    this.languageEmitter.emit(lang)
    localStorage.setItem('language', lang)
  }

}
