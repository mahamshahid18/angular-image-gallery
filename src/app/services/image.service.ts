import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  public showImg: Boolean;
  public currentClickedName: string;
  public currentImgIndex: number;

  constructor() {
    this.showImg = false;
    this.currentClickedName = null;
    this.currentImgIndex = null;
  }

  imgClicked(imgFileName, imgIndex?) {
    this.currentClickedName = imgFileName;
    this.currentImgIndex = imgIndex;
    this.toggleShowImg();
  }

  getImage(imgName) {
    return this.getStoredImages()[imgName];
  }

  getStoredImages() {
    return JSON.parse(localStorage.getItem('images'));
  }

  toggleShowImg() {
    this.showImg = !this.showImg;
  }
}
