import { Component, OnInit, HostListener } from '@angular/core';

import { ImageService } from '../../services/image.service';
import * as moment from 'moment';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  numCols: number;

  constructor(private service: ImageService) {
    this.numCols = 5;
  }

  ngOnInit() {}

  addImage(event): void {
    let fileData: String = null;
    let fileName: String = null;
    let fileCreatedAtDate: Date = null;

    if (event.target.files && event.target.files[0]) {
      fileName = event.target.files[0].name;
      fileCreatedAtDate = new Date();

      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (data: any) => {
        // called when file data has been read
        fileData = data.target.result;
        this.service.addImage(fileName, fileCreatedAtDate, fileData);
      };
    }
  }

  imgClick(name: string, index: number): void {
    this.service.imgClicked(name, index);
  }

  getImgAddedDateString(addedDate: string): string {
    return `Image added ${moment(addedDate).fromNow()}`;
  }

  // to make grid of images responsive according to screen size
  @HostListener('window:resize', ['$event'])
  updateColNum(event): void {
    if (window.innerWidth < 768) {
      // for mobile devices
      this.numCols = 1;
    } else if (window.innerWidth >= 768 && window.innerWidth < 992) {
      // for tablets
      this.numCols = 2;
    } else {
      // for laptops, bigger screens
      this.numCols = 5;
    }
  }

}
