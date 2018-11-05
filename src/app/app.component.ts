import { Component } from '@angular/core';

import { ImageService } from './services/image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Image Gallery';

  constructor(private service: ImageService) {  }
}
