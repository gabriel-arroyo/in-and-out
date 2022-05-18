import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { PosterComponent } from './poster/poster.component';
import { ButtonComponent } from './button/button.component';
import { WarningComponent } from './warning/warning.component';
import { GaleryItemComponent } from './galery-item/galery-item.component';
import { WarningImageComponent } from './warning-image/warning-image.component';

import { RouterModule } from '@angular/router';
import { GaleryComponent } from './galery/galery.component';



@NgModule({
  declarations: [
    NavbarComponent,
    PosterComponent,
    ButtonComponent,
    WarningComponent,
    GaleryComponent,
    GaleryItemComponent,
    WarningImageComponent,
    
  ],
  exports: [
    NavbarComponent,
    PosterComponent,
    ButtonComponent,
    WarningComponent,
    GaleryComponent,
    GaleryItemComponent,
    WarningImageComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
