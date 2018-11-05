import { Component, OnInit } from '@angular/core';

import { ImageService } from '../../services/image.service';
import * as moment from 'moment';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private service: ImageService) {}

  ngOnInit() {}

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
        this.service.addImage(fileName, fileCreatedAtDate, fileData);
      };
    }
  }

  imgClick(name: string, index: number) {
    this.service.imgClicked(name, index);
  }

  getImgAddedDateString(addedDate: string) {
    return `Image added ${moment(addedDate).fromNow()}`;
  }

}
