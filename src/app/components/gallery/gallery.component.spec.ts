
import { GalleryComponent } from './gallery.component';
import { ImageService } from 'src/app/services/image.service';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let service: ImageService;

  beforeEach(() => {
    service = new ImageService();
    component = new GalleryComponent(service);
  });

  it('should expect numCols property to be populated', () => {
    expect(component.numCols).not.toBeUndefined();
  });

  it('should expect imgClick function to call service', () => {
    const spy = spyOn(service, 'imgClicked');

    component.imgClick('', 0);

    expect(spy).toHaveBeenCalled();
  });

  it('should expect getImgAddedDateString function to return a string', () => {
    const addedDateString = component.getImgAddedDateString('11-11-11');

    expect(addedDateString).not.toBeUndefined();
    expect(typeof(addedDateString)).toBe('string');
  });
});
