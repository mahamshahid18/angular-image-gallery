import { Component, OnInit } from '@angular/core';

import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  imgName: string;
  imgSrc: string;
  imgCreatedDate: string;

  constructor(private imgServ: ImageService) {
    this.imgName = null;
    this.imgSrc = null;
    this.imgCreatedDate = null;
  }

  ngOnInit() {
    this.imgName = this.imgServ.currentClickedName;
    this.imgSrc = this.imgServ.getImage(this.imgName)[0];
    this.imgCreatedDate = this.imgServ.getImage(this.imgName)[1];
  }

}
