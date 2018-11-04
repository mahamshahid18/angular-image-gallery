import { Component, OnInit, HostListener } from '@angular/core';

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

  constructor(private service: ImageService) {
    this.imgName = null;
    this.imgSrc = null;
  }

  ngOnInit() {
    this.imgName = this.service.currentClickedName;
    this.imgSrc = this.service.getImage(this.imgName)[0];
  }

  @HostListener('document:keyup', ['$event'])
  detectEscapePress(event: KeyboardEvent) {
    if (event.key.toLowerCase() === 'escape') {
      this.closeSlider();
    }

  }

  closeSlider() {
    this.service.toggleShowImg();
  }

}
