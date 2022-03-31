import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { PosterComponent } from './poster/poster.component';
import { ButtonComponent } from './button/button.component';
import { WarningComponent } from './warning/warning.component';
import { GaleryComponent } from './galery/galery.component';
import { GaleryItemComponent } from './galery-item/galery-item.component';



@NgModule({
  declarations: [
    NavbarComponent,
    PosterComponent,
    ButtonComponent,
    WarningComponent,
    GaleryComponent,
    GaleryItemComponent
  ],
  exports: [
    NavbarComponent,
    PosterComponent,
    ButtonComponent,
    WarningComponent,
    GaleryComponent,
    GaleryItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
