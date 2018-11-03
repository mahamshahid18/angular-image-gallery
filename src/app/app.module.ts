import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SliderComponent } from './components/slider/slider.component';

import { ImageService } from './services/image.service';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule
  ],
  providers: [
    ImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
