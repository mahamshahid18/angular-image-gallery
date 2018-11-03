import { Component, OnInit } from '@angular/core';

import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private service: ImageService) { }

  images = null;
  imgKeys = null;

  ngOnInit() {
    this.updateImageUI();
  }

  addImage(event) {
    let fileData = null;
    let fileName = null;
    let fileCreatedAtDate = null;

    if (event.target.files && event.target.files[0]) {
      fileName = event.target.files[0].name;
      fileCreatedAtDate = new Date();

      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (data: any) => { // called once readAsDataURL is completed
        fileData = data.target.result;
        this.storeImage(fileName, fileCreatedAtDate, fileData);
      };
    }
  }

  storeImage(name, date, data) {
    let storedImages = this.getStoredImages();

    if (storedImages === null || storedImages === undefined) {
      storedImages = {};
    }

    storedImages[name] = [data, date];
    localStorage.setItem('images', JSON.stringify(storedImages));

    this.updateImageUI();
  }

  getStoredImages() {
    return JSON.parse(localStorage.getItem('images'));
  }

  updateImageUI() {
    this.images = this.getStoredImages();
    this.imgKeys = Object.keys(this.images);
  }

  imgClick(name) {
    this.service.imgClicked(name);
  }

}
