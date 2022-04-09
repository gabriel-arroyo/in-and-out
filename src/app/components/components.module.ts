import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { PosterComponent } from './poster/poster.component';
import { ButtonComponent } from './button/button.component';
import { WarningComponent } from './warning/warning.component';
import { GaleryComponent } from './galery/galery.component';
import { GaleryItemComponent } from './galery-item/galery-item.component';
import { WarningImageComponent } from './warning-image/warning-image.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    PosterComponent,
    ButtonComponent,
    WarningComponent,
    GaleryComponent,
    GaleryItemComponent,
    WarningImageComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  exports: [
    NavbarComponent,
    PosterComponent,
    ButtonComponent,
    WarningComponent,
    GaleryComponent,
    GaleryItemComponent,
    WarningImageComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
