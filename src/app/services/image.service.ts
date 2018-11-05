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

  getImage(index) {
    const allImages = this.getStoredImages();
    return allImages[Object.keys(allImages)[index]];
  }

  getStoredImages() {
    return JSON.parse(localStorage.getItem('images'));
  }

  getAllImages() {

  }

  deleteImage(index) {
    // delete the image on index
  }

  toggleShowImg() {
    this.showImg = !this.showImg;
  }
}
