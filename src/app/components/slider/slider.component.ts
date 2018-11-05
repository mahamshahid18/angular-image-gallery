import { Component, OnInit, HostListener } from '@angular/core';

import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  imgName: string;
  imgSrc: string;
  imgIndex: number;
  totalImages: number;

  constructor(private service: ImageService) {
    this.imgName = null;
    this.imgSrc = null;
    this.imgIndex = null;
    this.totalImages = null;
  }

  ngOnInit() {
    const allImages = Object.keys(this.service.getStoredImages());
    this.imgName = this.service.currentClickedName;
    this.imgIndex = this.service.currentImgIndex;
    this.imgSrc = this.service.getImage(this.imgIndex)[0];
    this.totalImages = allImages.length;
  }

  @HostListener('document:keyup', ['$event'])
  detectEscapePress(event: KeyboardEvent) {
    if (event.key.toLowerCase() === 'escape') {
      this.closeSlider();
    } else if (event.key.toLowerCase() === 'arrowleft') {
      this.viewPrevImage();
    } else if (event.key.toLowerCase() === 'arrowright') {
      this.viewNextImage();
    }

  }

  closeSlider() {
    this.service.toggleShowImg();
  }

  updateImageInView() {
    if (this.imgIndex >= 0 && this.imgIndex < this.totalImages) {
      this.imgSrc = this.service.getImage(this.imgIndex)[0];
    }
  }

  viewNextImage() {
    this.imgIndex++;
    this.updateImageInView();
  }

  viewPrevImage() {
    this.imgIndex--;
    this.updateImageInView();
  }

}
