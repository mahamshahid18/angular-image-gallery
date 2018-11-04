import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  public showImg: Boolean;
  public currentClickedName: string;

  constructor() {
    this.showImg = false;
    this.currentClickedName = null;
  }

  imgClicked(imgFileName) {
    this.currentClickedName = imgFileName;
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
