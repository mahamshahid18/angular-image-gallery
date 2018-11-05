import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';

import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, OnDestroy {

  imgSrc: String;
  imgIndex: number;
  totalImages: number;

  constructor(private service: ImageService) {
    this.imgSrc = null;
    this.imgIndex = null;
    this.totalImages = null;
  }

  ngOnInit(): void {
    this.imgIndex = this.service.currentImgIndex;
    this.imgSrc = this.service.getImage(this.imgIndex).src;
    this.totalImages = this.service.getStoredImages().length;
    // scroll to top, then hide scrolling in this component
    window.scrollTo(0, 0);
    document.body.style.overflowY = 'hidden';
  }

  ngOnDestroy(): void {
    // setting back to default
    document.body.style.overflowY = 'auto';
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

  deleteImg(): void {
    this.service.deleteImage(this.imgIndex);

    if (this.imgIndex === this.totalImages - 1) {
      // if last image is deleted, update the index
      // to stop it from going out of bounds
      this.imgIndex--;
    }

    this.totalImages--;
    this.updateImageInView();
  }

  closeSlider(): void {
    this.service.toggleShowImg();
  }

  viewNextImage(): void {
    this.imgIndex++;
    this.updateImageInView();
  }

  viewPrevImage(): void {
    this.imgIndex--;
    this.updateImageInView();
  }

  updateImageInView(): void {
    if (this.imgIndex >= 0 && this.imgIndex < this.totalImages) {
      // update the image currently in view
      // according to changed index
      this.imgSrc = this.service.getImage(this.imgIndex).src;
    }
  }

}
