import { Injectable } from '@angular/core';

import { Observable, ReplaySubject } from 'rxjs';
import { ImageObject } from '../interfaces/image-object.interface';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  public showImg: Boolean;
  public currentClickedName: string;
  public currentImgIndex: number;
  public openSlider$: Observable<Boolean>;
  public listOfImages$: Observable<ImageObject[]>;
  private storedImages: ImageObject[] = [];
  private images: ReplaySubject<ImageObject[]> = new ReplaySubject<ImageObject[]>();
  private sliderState: ReplaySubject<Boolean> = new ReplaySubject<Boolean>();

  constructor() {
    this.showImg = false;
    this.currentClickedName = null;
    this.currentImgIndex = null;

    this.init();
  }

  imgClicked(imgFileName, imgIndex?) {
    this.currentClickedName = imgFileName;
    this.currentImgIndex = imgIndex;
    this.toggleShowImg();
  }

  getImage(index) {
    return this.storedImages[index];
  }

  getStoredImages() {
    const imagesArray = JSON.parse(localStorage.getItem('images'));
    if (imagesArray === undefined || imagesArray === null) {
      return [];
    }
    return imagesArray;
  }

  init() {
    this.storedImages = this.getStoredImages();

    this.images.next(this.storedImages);
    this.listOfImages$ = this.images.asObservable();

    this.sliderState.next(this.showImg);
    this.openSlider$ = this.sliderState.asObservable();
  }

  deleteImage(index) {
    // delete the image on index
    this.storedImages.splice(index, 1);
    this.images.next(this.storedImages);
    localStorage.setItem('images', JSON.stringify(this.storedImages));
  }

  addImage(name, date, data) {
    const newImage: ImageObject = {
      name,
      src: data,
      addedOn: date
    };

    this.storedImages.push(newImage);
    localStorage.setItem('images', JSON.stringify(this.storedImages));

    this.images.next(this.storedImages);
  }

  toggleShowImg() {
    this.showImg = !this.showImg;
    this.sliderState.next(this.showImg);
  }
}
