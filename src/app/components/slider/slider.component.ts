import { Component, OnInit, HostListener } from '@angular/core';

import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  imgSrc: String;
  imgIndex: number;
  totalImages: number;

  constructor(private service: ImageService) {
    this.imgSrc = null;
    this.imgIndex = null;
    this.totalImages = null;
  }

  ngOnInit() {
    this.imgIndex = this.service.currentImgIndex;
    this.imgSrc = this.service.getImage(this.imgIndex).src;
    this.totalImages = this.service.getStoredImages().length;
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
      this.imgSrc = this.service.getImage(this.imgIndex).src;
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

  deleteImg() {
    this.service.deleteImage(this.imgIndex);

    if (this.imgIndex === this.totalImages - 1) {
      this.imgIndex--;
    }

    this.totalImages--;
    this.updateImageInView();
  }

}
